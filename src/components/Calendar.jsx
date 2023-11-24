import { useState } from "react";
import bgImg from "../Assets/request-bg.svg";
import { Calendar as AntdCalender, Col, Row, Select, Checkbox } from "antd";
import searchIcon from "../Assets/search-icon.svg";
import memberImg1 from "../Assets/member-img-1.png";
import memberImg2 from "../Assets/member-img-2.png";
import memberImg3 from "../Assets/member-img-3.png";
import calendarIcon from "../Assets/dark-blue-calendar-icon.svg";
import clockIcon from "../Assets/gray-clock-icon.svg";
import locationIcon from "../Assets/blue-location-icon.svg";

function Calendar() {
  // Data to show in table
  const data = [
    {
      key: 0,
      date: "12 Dec, 2021",
      time: "10.15AM",
      name: "Arrora Gaur",
      appointmentType: "Face to Face",
      checked: false,
    },
    {
      key: 1,
      date: "10 Dec, 2021",
      time: "11.20AM",
      name: "James Mullican",
      appointmentType: "Telephone",
      checked: false,
    },
    {
      key: 2,
      date: "09 Dec, 2021",
      time: "11.45AM",
      name: "Robert Bacins",
      appointmentType: "Telephone",
      checked: false,
    },
    {
      key: 3,
      date: "08 Dec, 2021",
      time: "12.15PM",
      name: "Bethany Jackson",
      appointmentType: "Face to Face",
      checked: false,
    },
    {
      key: 4,
      date: "07 Dec, 2021",
      time: "01.20PM",
      name: "Anne Jacob",
      appointmentType: "Telephone",
      checked: false,
    },
    {
      key: 5,
      date: "05 Dec, 2021",
      time: "10.15AM",
      name: "Bethany Jackson",
      appointmentType: "Face to Face",
      checked: false,
    },
    {
      key: 6,
      date: "04 Dec, 2021",
      time: "11.15AM",
      name: "James Mullican",
      appointmentType: "Face to Face",
      checked: false,
    },
    {
      key: 7,
      date: "04 Dec, 2021",
      time: "01.25PM",
      name: "Jhon Deo",
      appointmentType: "Telephone",
      checked: false,
    },
    {
      key: 8,
      date: "02 Dec, 2021",
      time: "10.15AM",
      name: "Bethany Jackson",
      appointmentType: "Telephone",
      checked: false,
    },
    {
      key: 9,
      date: "01 Dec, 2021",
      time: "04.30PM",
      name: "James Mullican",
      appointmentType: "Face to Face",
      checked: false,
    },
    {
      key: 4,
      date: "07 Dec, 2021",
      time: "01.20PM",
      name: "Anne Jacob",
      appointmentType: "Telephone",
      checked: false,
    },
    {
      key: 5,
      date: "05 Dec, 2021",
      time: "10.15AM",
      name: "Bethany Jackson",
      appointmentType: "Face to Face",
      checked: false,
    },
    {
      key: 6,
      date: "04 Dec, 2021",
      time: "11.15AM",
      name: "James Mullican",
      appointmentType: "Face to Face",
      checked: false,
    },
    {
      key: 7,
      date: "04 Dec, 2021",
      time: "01.25PM",
      name: "Jhon Deo",
      appointmentType: "Telephone",
      checked: false,
    },
    {
      key: 8,
      date: "02 Dec, 2021",
      time: "10.15AM",
      name: "Bethany Jackson",
      appointmentType: "Telephone",
      checked: false,
    },
    {
      key: 9,
      date: "01 Dec, 2021",
      time: "04.30PM",
      name: "James Mullican",
      appointmentType: "Face to Face",
      checked: false,
    },
  ];

  // States
  const [tableData, setTableData] = useState(data);
  const [selectAll, setSelectAll] = useState(false);

  // staff members data
  const members = [
    { name: "Eddie Lobanovskiy", designation: "GP", img: memberImg1 },
    { name: "Alexey Stave", designation: "ST3 GP Registrar", img: memberImg2 },
    {
      name: "Anton Tkacheve",
      designation: "Practice Manager",
      img: memberImg3,
    },
  ];

  // function on the panel change of side calendar
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  // Function to handle Check or uncheck the row
  const handleCheckRow = (event, key, type) => {
    const updatedData = tableData.map((item) => {
      if (type === "singleSelect") {
        if (item.key === key) {
          return { ...item, checked: event.target.checked };
        }
        return item;
      } else {
        setSelectAll(event.target.checked);
        return { ...item, checked: event.target.checked };
      }
    });
    setTableData(updatedData);
  };

  return (
    <>
      <div
        className="p-8 pt-10 flex flex-col gap-8 bg-[#f1f4fa] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Page Heading */}
        <p className="text-[#06152B] font-dm-sans text-2xl font-bold leading-normal">
          Appointment Calendar
        </p>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* side informations */}
          <div className="flex gap-8 bg-white rounded-md p-8 h-inherit lg:w-fit">
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-5">
                <button className="flex gap-3 justify-center items-center py-4 px-8 w-full rounded-lg bg-[#0E72B7] text-white text-base leading-normal">
                  <span>+</span>
                  <span>Create Schedule</span>
                </button>
                <AntdCalender
                  fullscreen={false}
                  onPanelChange={onPanelChange}
                  headerRender={({ value, onChange }) => {
                    const start = 0;
                    const end = 12;
                    const monthOptions = [];

                    let current = value.clone();
                    const localeData = value.localeData();
                    const months = [];
                    for (let i = 0; i < 12; i++) {
                      current = current.month(i);
                      months.push(localeData.monthsShort(current));
                    }

                    for (let i = start; i < end; i++) {
                      monthOptions.push(
                        <Select.Option key={i} value={i} className="month-item">
                          {months[i]}
                        </Select.Option>
                      );
                    }

                    const year = value.year();
                    const month = value.month();
                    const options = [];
                    for (let i = year - 10; i < year + 10; i += 1) {
                      options.push(
                        <Select.Option key={i} value={i} className="year-item">
                          {i}
                        </Select.Option>
                      );
                    }
                    return (
                      <div style={{ padding: 8 }}>
                        <Row gutter={8}>
                          <Col>
                            <Select
                              size="small"
                              dropdownMatchSelectWidth={false}
                              className="my-year-select"
                              value={year}
                              onChange={(newYear) => {
                                const now = value.clone().year(newYear);
                                onChange(now);
                              }}
                            >
                              {options}
                            </Select>
                          </Col>
                          <Col>
                            <Select
                              size="small"
                              dropdownMatchSelectWidth={false}
                              value={month}
                              onChange={(newMonth) => {
                                const now = value.clone().month(newMonth);
                                onChange(now);
                              }}
                            >
                              {monthOptions}
                            </Select>
                          </Col>
                        </Row>
                      </div>
                    );
                  }}
                  className="lg:w-min border border-[#F1F4FA] rounded-md p-2"
                />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-[#06152B] text-base font-bold leading-normal">
                  Staff Members
                </p>
                <div className="rounded-lg bg-[#F1F4FA] flex gap-2 items-center py-4 px-5 w-full">
                  <img src={searchIcon} alt="_search" />
                  <input
                    type="text"
                    placeholder="Search for People"
                    className="outline-none border-none bg-transparent"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  {members.map((member) => (
                    <div className="p-2 pt-0 border-b border-[#f2f2f4] flex gap-4 items-center">
                      <img
                        src={member.img}
                        alt="_person"
                        className="w-[34px] h-[34px] rounded-full"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="text-[#06152B] font-sm leading-normal">
                          {member.name}
                        </p>
                        <p className="text-[#838a95] font-xs leading-normal">
                          {member.designation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="w-full h-[920px] overflow-y-scroll calenderTable">
            <table width="100%" border="0">
              <tbody>
                <tr className="flex gap-1 px-2 justify-between items-center sticky top-0 h-10  bg-[#f1f4fa] z-[1]">
                  <td className="w-[5%]">
                    <Checkbox
                      onChange={(e) => handleCheckRow(e, null, "multiSelect")}
                      defaultChecked={false}
                      checked={selectAll}
                    />
                  </td>
                  <td className="w-[22.5%] text-[#4b5769] text-base leading-normal font-medium">
                    Date
                  </td>
                  <td className="w-[22.5%] text-[#4b5769] text-base leading-normal font-medium">
                    Time
                  </td>
                  <td className="w-[22.5%] text-[#4b5769] text-base leading-normal font-medium">
                    Name
                  </td>
                  <td className="w-[22.5%] text-[#4b5769] text-base leading-normal font-medium w-max">
                    Appointment Type
                  </td>
                </tr>
                {tableData.map((item) => (
                  <tr className="flex gap-2 justify-between items-center py-4 px-2 bg-white rounded-lg mb-3">
                    <td className="w-[5%]">
                      <Checkbox
                        onChange={(e) =>
                          handleCheckRow(e, item.key, "singleSelect")
                        }
                        defaultChecked={false}
                        checked={item.checked}
                      />
                    </td>
                    <td className="w-[22.5%] flex gap-3 items-center">
                      <img src={calendarIcon} alt="_date" />
                      <p className="text-[#06152B] font-base leading-normal">
                        {item.date}
                      </p>
                    </td>
                    <td className="w-[22.5%] flex gap-3 items-center">
                      <img src={clockIcon} alt="_time" />
                      <p className="text-[#06152B] font-base leading-normal">
                        {item.time}
                      </p>
                    </td>
                    <td className="w-[22.5%]">
                      <p className="text-[#06152B] font-base leading-normal">
                        {item.name}
                      </p>
                    </td>
                    <td className="w-[22.5%] flex gap-4 py-3 px-5 min-w-[171px] rounded-full bg-[#ebebfb]">
                      <img src={locationIcon} alt="_location" />
                      <p className="text-[#0E72B7] text-base leading-normal">
                        {item.appointmentType}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
