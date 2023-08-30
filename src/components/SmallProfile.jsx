import { useEffect, useState } from "react";
import icon_work_svg from "../assets/images/icon-work.svg";

function SmallProfile({ item, values }) {
  //   console.log(item, "props",values);

  const [current, setCurrent] = useState(null);
  const [previous, setPrevious] = useState(null);
  const { title, timeframes,image,className } = item;

  console.log(className,'sss');
//   console.log(timeframes == values);

  useEffect(() => {
    switch (values) {
      case "daily":
        setCurrent(timeframes.daily.current);
        setPrevious(timeframes.daily.previous);
        break;
      case "weekly":
        setCurrent(timeframes.weekly.current);
        setPrevious(timeframes.weekly.previous);
        break;
      case "monthly":
        setCurrent(timeframes.monthly.current);
        setPrevious(timeframes.monthly.previous);
        break;

      default:
        break;
    }

    return () => {};
  }, [values]);

  return (
    <div className="right-section-wrapper">
      <div className={`smallProfile-header ${className}`}>
        <img src={image} alt="" />
      </div>
      <div className="smallProfile-intervals">
        <ul>
          <li>{title}</li>
          <li>...</li>
        </ul>
        <div className="smallProfile-intervals-box">
          <h1>{current}hrs</h1>
          <p>Last Week - {previous}hrs</p>
        </div>
      </div>
    </div>
  );
}

export default SmallProfile;
