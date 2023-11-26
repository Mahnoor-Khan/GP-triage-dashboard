import { useState } from "react";
import bgImg from "../Assets/request-bg.svg";
import searchIcon from "../Assets/search-icon-2.svg";
import { Popover, Checkbox } from "antd";
import grayStar from "../Assets/gray-star-icon.svg";
import redStar from "../Assets/red-star-icon.svg";
import editIcon from "../Assets/black-edit-icon.svg";
import redDeleteIcon from "../Assets/red-delete-icon.svg";
import calendarIcon from "../Assets/dark-blue-calendar-icon.svg";
import grayDeleteIcon from "../Assets/gray-delete-icon.svg";
import grayActionIcon from "../Assets/gray-action-icon.svg";
import blueActionIcon from "../Assets/blue-action-icon.svg";

function Triages() {
  // data to show in table
  const data = [
    {
      id: "#876364",
      name: "Arrora Gaur",
      age: "19",
      presentingComplaint: "High Fever",
      date: "12 Dec, 2020",
      status: "Semi-Urgent",
      star: true,
      checked: false,
    },
    {
      id: "#876123",
      name: "James Mullican",
      age: "87",
      presentingComplaint: "Chronic Knee Pain",
      date: "10 Dec, 2020",
      status: "Routine",
      star: false,
      checked: false,
    },
    {
      id: "#876213",
      name: "Robert Bacins",
      age: "41",
      presentingComplaint: "Headache",
      date: "09 Dec, 2020",
      status: "Semi-Urgent",
      star: false,
      checked: false,
    },
    {
      id: "#876987",
      name: "Bethany Jackson",
      age: "67",
      presentingComplaint: "Chest Pain",
      date: "09 Dec, 2020",
      status: "Urgent",
      star: true,
      checked: false,
    },
    {
      id: "#871345",
      name: "Anne Jacob",
      age: "53",
      presentingComplaint: "Chesty Cough",
      date: "10 Dec, 2020",
      status: "Semi-Urgent",
      star: true,
      checked: false,
    },
    {
      id: "#872345",
      name: "Bethany Jackson",
      age: "22",
      presentingComplaint: "Tiredness",
      date: "10 Dec, 2020",
      status: "Routine",
      star: false,
      checked: false,
    },
    {
      id: "#872346",
      name: "James Mullican",
      age: "26",
      presentingComplaint: "Persistent Low Mood",
      date: "10 Dec, 2020",
      status: "Semi-Urgent",
      star: false,
      checked: false,
    },
    {
      id: "#873245",
      name: "Jhon Deo",
      age: "38",
      presentingComplaint: "Vertigo and Dizziness",
      date: "08 Dec, 2020",
      status: "Semi-Urgent",
      star: false,
      checked: false,
    },
    {
      id: "#875364",
      name: "Bethany Jackson",
      age: "67",
      presentingComplaint: "Difficulty in Breathing",
      date: "02 Dec, 2020",
      status: "Urgent",
      star: false,
      checked: false,
    },
    {
      id: "#878769",
      name: "James Mullican",
      age: "31",
      presentingComplaint: "Loose Stools",
      date: "01 Dec, 2020",
      status: "Routine",
      star: false,
      checked: false,
    },
  ];

  // States
  const [tableData, setTableData] = useState(data);
  const [selectAll, setSelectAll] = useState(false);
  const [actionHoverId, setActionHoverId] = useState("");

  // Function to handle Check or uncheck the row
  const handleCheckRow = (event, id, type) => {
    const updatedData = tableData.map((item) => {
      if (type === "singleSelect") {
        if (item.id === id) {
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

  // Function to handle favourite row
  const handleClickFav = (row) => {
    const updatedData = tableData.map((item) => {
      if (item.id === row.id) {
        return { ...item, star: !item.star };
      }
      return item;
    });
    setTableData(updatedData);
  };

  // Function to delete row data
  const handleDeleteData = (id) => {
    setTableData(tableData.filter((item) => item.id !== id));
  };

  return (
    <>
      <div
        className="p-8 pt-10 flex flex-col gap-12 bg-[#f1f4fa] bg-no-repeat bg-cover h-[100%]"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex justify-between items-center gap-6">
          {/* Header */}
          <p className="text-[#06152B] font-dm-sans text-2xl font-bold leading-normal">
            Triage Centre
          </p>
          <div className="flex gap-3 items-center">
            {/* Search */}
            <div className="flex gap-2 bg-white py-3 px-5 rounded-lg h-[44px]">
              <input
                type="text"
                placeholder="Search"
                className="outline-none"
              />
              <img src={searchIcon} alt="_search" />
            </div>
            <button className="h-[44px] py-3 px-8 rounded-lg flex gap-2 items-center justiy-center text-white font-dm-sans text-sm font-medium bg-[#0E72B7]">
              <span>+</span>
              <span>Add Task</span>
            </button>
          </div>
        </div>

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
              <td className="w-[8%] text-[#4b5769] text-base leading-normal font-medium">
                Triage Id
              </td>
              <td className="w-[13.58%] text-[#4b5769] text-base leading-normal font-medium">
                Name
              </td>
              <td className="w-[8%] text-[#4b5769] text-base leading-normal font-medium">
                Age
              </td>
              <td className="w-[19.16%] text-[#4b5769] text-base leading-normal font-medium w-max">
                Presenting Complaint
              </td>
              <td className="w-[19.16%] text-[#4b5769] text-base leading-normal font-medium w-max">
                Date
              </td>
              <td className="w-[19.16%] text-[#4b5769] text-base leading-normal font-medium w-max">
                Status
              </td>
              <td className="w-[8%] text-[#4b5769] text-base leading-normal font-medium w-max flex justify-end items-center">
                <img src={grayDeleteIcon} alt="Actions" />
              </td>
            </tr>
            {tableData.map((item) => (
              <tr className="flex gap-2 justify-between items-center py-4 px-2 bg-white rounded-lg mb-3">
                <td className="w-[5%]">
                  <Checkbox
                    onChange={(e) => handleCheckRow(e, item.id, "singleSelect")}
                    defaultChecked={false}
                    checked={item.checked}
                  />
                </td>
                <td className="w-[8%] text-[#06152B] font-base leading-normal">
                  {item.id}
                </td>
                <td className="w-[13.58%] text-[#06152B] font-base leading-normal">
                  {item.name}
                </td>
                <td className="w-[8%]">
                  <p className="text-[#06152B] font-base leading-normal">
                    {item.age}
                  </p>
                </td>
                <td className="w-[19.16%] text-[#06152B] text-base leading-normal">
                  {item.presentingComplaint}
                </td>
                <td className="w-[19.16%] flex gap-4 py-3 px-5 ">
                  <img src={calendarIcon} alt="_date" />
                  <p className="text-[#06152B] text-base leading-normal">
                    {item.date}
                  </p>
                </td>
                <td
                  className={`w-[19.16%] flex py-3 px-8 w-[162px] justify-center items-center rounded-full text-base leading-normal ${
                    item.status === "Semi-Urgent"
                      ? "text-[#0B132B]"
                      : item.status === "Routine"
                      ? "text-[#0E72B7]"
                      : "text-[#FC8D71]"
                  } ${
                    item.status === "Semi-Urgent"
                      ? "bg-[#9BD4E3]"
                      : item.status === "Routine"
                      ? "bg-[#CDEAF1]"
                      : "bg-[#FEE8E3]"
                  }`}
                >
                  {item.status}
                </td>
                <td className="w-[8%] flex gap-8 justify-center items-center py-3 px-1">
                  <img
                    className="cursor-pointer"
                    onClick={() => handleClickFav(item)}
                    src={item.star ? redStar : grayStar}
                    alt="_fav"
                  />
                  <Popover
                    placement="bottom"
                    content={
                      <div className="bg-white rounded-lg p-0 flex flex-col gap-1">
                        <div className="cursor-pointer bg-[#f5f5fd] flex items-center gap-2 rounded-lg p-2 w-[90px] text-[#0B132B] text-sm leading-normal font-medium">
                          <img src={editIcon} alt="_edit" />
                          Edit
                        </div>
                        <div
                          onClick={() => handleDeleteData(item.id)}
                          className="cursor-pointer bg-[#fff7fb] flex items-center gap-2 rounded-lg p-2 w-[90px] text-[#FC8D71] text-sm leading-normal font-medium"
                        >
                          <img src={redDeleteIcon} alt="_delete" />
                          Delete
                        </div>
                      </div>
                    }
                  >
                    <img
                      onMouseEnter={() => setActionHoverId(item.id)}
                      onMouseLeave={() => setActionHoverId("")}
                      className="p-2 cursor-pointer"
                      src={
                        actionHoverId === item.id
                          ? blueActionIcon
                          : grayActionIcon
                      }
                      alt="_actions"
                    />
                  </Popover>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Triages;
