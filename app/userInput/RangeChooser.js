"use client";
import { DatePicker } from "antd";
import { useRouter } from 'next/navigation';
const { RangePicker } = DatePicker;

function RangeChooser() {

  const router = useRouter();

  const disabledDate = (current) => {
    const currentDate = current ? current.valueOf() : 0;
    const startDate = new Date("2022-09-16").valueOf();
    const endDate = new Date("2022-12-15").valueOf();
    return currentDate < startDate || currentDate > endDate;
  };

  const getYearMonthDay = (date) => {
    let year = date.getFullYear(); // Get the year (YYYY)
    let month = date.getMonth() + 1; // Get the month (0-11), adding 1 to match human-readable months
    month = month < 10 ? `0${month}` : month; // Ensure two digits for month (MM)
    let day = date.getDate(); // Get the day (1-31)
    day = day < 10 ? `0${day}` : day; // Ensure two digits for day (DD)
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  const handleDateChange = async (values) => {
    if(values){
      router.push('/home-page?startDate=' + getYearMonthDay(new Date(values[0].$d)) + '&endDate=' + getYearMonthDay(new Date(values[1].$d)));
      router.refresh();
    }
  };

  return (
    <div style={{ margin: '20px', cursor: "pointer" }}>
      <RangePicker onChange={handleDateChange} disabledDate={disabledDate} />
    </div>
  );
}

export default RangeChooser;
