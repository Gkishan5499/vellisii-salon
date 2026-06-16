import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomDatePickerProps {
  selectedDate: string; // stored as YYYY-MM-DD
  onChange: (date: string) => void;
  placeholder: string;
  label: string;
  required?: boolean;
  allowPastDates?: boolean; // true for Date of Birth, false for appointments
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function CustomDatePicker({
  selectedDate,
  onChange,
  placeholder,
  label,
  required = false,
  allowPastDates = false,
}: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse initial selected date or default to today
  const today = new Date();
  const initialDate = selectedDate ? new Date(selectedDate) : today;
  
  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth());
  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());

  // Close calendar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update view when selected date changes externally
  useEffect(() => {
    if (selectedDate) {
      const d = new Date(selectedDate);
      if (!isNaN(d.getTime())) {
        setCurrentMonth(d.getMonth());
        setCurrentYear(d.getFullYear());
      }
    }
  }, [selectedDate]);

  // Determine year range
  const currentYearNum = today.getFullYear();
  const years: number[] = [];
  if (allowPastDates) {
    // For Date of Birth, allow 100 years back up to current year
    for (let y = currentYearNum; y >= currentYearNum - 100; y--) {
      years.push(y);
    }
  } else {
    // For reservations, allow today up to 5 years in the future
    for (let y = currentYearNum; y <= currentYearNum + 5; y++) {
      years.push(y);
    }
  }

  // Format date helper for input display
  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const [year, month, day] = parts;
    return `${day}/${month}/${year}`; // DD/MM/YYYY format
  };

  // Get calendar days grid
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    // Sunday is 0, Monday is 1, etc.
    // Adjust so Monday is 0 or keep standard (let's keep standard: Sun=0)
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const handleSelectDay = (day: number) => {
    const monthStr = String(currentMonth + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    const dateStr = `${currentYear}-${monthStr}-${dayStr}`; // YYYY-MM-DD
    onChange(dateStr);
    setIsOpen(false);
  };

  // Render calendar grid
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);
  
  // Previous month days to fill empty start slots
  const prevMonthIndex = currentMonth === 0 ? 11 : currentMonth - 1;
  const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  const daysInPrevMonth = getDaysInMonth(prevYear, prevMonthIndex);
  
  const cells: { day: number; currentMonth: boolean; disabled: boolean }[] = [];

  // Fill in previous month days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    cells.push({
      day: daysInPrevMonth - i,
      currentMonth: false,
      disabled: true
    });
  }

  // Fill in current month days
  const todayReset = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  for (let i = 1; i <= daysInMonth; i++) {
    const cellDate = new Date(currentYear, currentMonth, i);
    const isPast = cellDate < todayReset;
    const disabled = !allowPastDates && isPast;

    cells.push({
      day: i,
      currentMonth: true,
      disabled
    });
  }

  // Fill in remaining cells to complete 6 rows (42 cells)
  const remainingCells = 42 - cells.length;
  for (let i = 1; i <= remainingCells; i++) {
    cells.push({
      day: i,
      currentMonth: false,
      disabled: true
    });
  }

  return (
    <div className="space-y-2 relative" ref={containerRef}>
      <label className="text-[10px] tracking-[0.3em] uppercase text-white/50 block font-montserrat">
        {label} {required && <span className="text-burnt-orange">*</span>}
      </label>
      
      {/* Input container with focus active-line animation */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="relative cursor-pointer flex items-center justify-between"
      >
        <input
          type="text"
          readOnly
          value={formatDisplayDate(selectedDate)}
          placeholder={placeholder}
          className="w-full bg-transparent border-none py-4 pr-10 outline-none text-sm font-light text-white placeholder-white/20 select-none cursor-pointer"
        />
        <CalendarIcon className="absolute right-2 text-white/40 pointer-events-none" size={16} />
        
        {/* Underline transitions */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-zinc-800" />
        <div 
          className={`absolute bottom-0 left-0 right-0 h-[2px] bg-burnt-orange transition-transform duration-300 origin-left ${
            isOpen ? 'scale-x-100' : 'scale-x-0'
          }`}
        />
      </div>

      {/* Date Picker Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-2 left-0 right-0 md:w-80 bg-luxury-black border border-zinc-800 p-4 shadow-2xl shadow-black/80 font-montserrat"
          >
            {/* Header controls */}
            <div className="flex items-center justify-between mb-4">
              <button 
                type="button"
                onClick={handlePrevMonth}
                className="w-8 h-8 rounded-none border border-zinc-800 hover:border-burnt-orange hover:text-burnt-orange flex items-center justify-center text-white/60 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex gap-2">
                {/* Month Dropdown */}
                <select
                  value={currentMonth}
                  onChange={(e) => setCurrentMonth(Number(e.target.value))}
                  className="bg-transparent border border-zinc-800 text-white text-xs px-2 py-1 outline-none focus:border-burnt-orange font-bold uppercase tracking-wider appearance-none cursor-pointer"
                  style={{
                    backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'white\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")',
                    backgroundPosition: 'right 2px center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '16px',
                    paddingRight: '18px'
                  }}
                >
                  {MONTHS.map((m, idx) => (
                    <option key={m} value={idx} className="bg-luxury-black text-white uppercase text-xs tracking-widest">{m.substring(0, 3)}</option>
                  ))}
                </select>

                {/* Year Dropdown */}
                <select
                  value={currentYear}
                  onChange={(e) => setCurrentYear(Number(e.target.value))}
                  className="bg-transparent border border-zinc-800 text-white text-xs px-2 py-1 outline-none focus:border-burnt-orange font-bold appearance-none cursor-pointer"
                  style={{
                    backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'white\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")',
                    backgroundPosition: 'right 2px center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '16px',
                    paddingRight: '18px'
                  }}
                >
                  {years.map(y => (
                    <option key={y} value={y} className="bg-luxury-black text-white">{y}</option>
                  ))}
                </select>
              </div>

              <button 
                type="button"
                onClick={handleNextMonth}
                className="w-8 h-8 rounded-none border border-zinc-800 hover:border-burnt-orange hover:text-burnt-orange flex items-center justify-center text-white/60 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Days of week header */}
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] tracking-widest uppercase text-white/30 font-bold mb-2">
              <span>Su</span>
              <span>Mo</span>
              <span>Tu</span>
              <span>We</span>
              <span>Th</span>
              <span>Fr</span>
              <span>Sa</span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1">
              {cells.map((cell, idx) => {
                const isSelected = selectedDate === `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(cell.day).padStart(2, '0')}` && cell.currentMonth;
                const isToday = today.getDate() === cell.day && today.getMonth() === currentMonth && today.getFullYear() === currentYear && cell.currentMonth;

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={cell.disabled}
                    onClick={() => handleSelectDay(cell.day)}
                    className={`h-8 text-xs font-light transition-all flex items-center justify-center border ${
                      !cell.currentMonth 
                        ? 'text-white/10 border-transparent pointer-events-none'
                        : cell.disabled
                          ? 'text-white/10 border-transparent line-through pointer-events-none'
                          : isSelected
                            ? 'bg-burnt-orange text-black font-bold border-burnt-orange'
                            : isToday
                              ? 'border-burnt-orange/50 hover:bg-burnt-orange/[0.05] hover:border-burnt-orange text-white'
                              : 'border-transparent text-white/70 hover:bg-white/[0.03] hover:text-white'
                    }`}
                  >
                    {cell.day}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
