import React from "react";
import styles from "../styles/Card.module.css";

const Card = ({ course }: any) => {
  const { code, title, professor, time, color, marksObtained, totalMarks } =
    course;

  return (
    <div
      className={`bg-[#061024] backdrop-blur-lg rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 group shadow-md hover:shadow-${color}-500/40`}
    >
      <div
        className={`h-2 bg-${color}-500/20 group-hover:bg-${color}-500/40 transition-colors mx-2 rounded-t-lg`}
      />
      <div className={styles.body}>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-medium text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
            {code}
          </span>
        </div>
        <big className="text-gray-100 font-semibold text-lg mb-2">{title}</big>
        <div className="text-xs text-gray-400">
          Marks: {marksObtained}/{totalMarks}
        </div>
      </div>
    </div>
  );
};

export default Card;
