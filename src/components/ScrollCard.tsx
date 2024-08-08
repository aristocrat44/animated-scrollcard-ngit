const ScrollCard = () => {
  const glassCardStyle = "border-[8px] bg-glass border-glass";
  return (
    <div
      className={`w-[300px] md:w-[400px] h-[400px] px-[30px] shadow-lg rounded-3xl flex flex-col ${glassCardStyle} cursor-pointer`}
    >
      <div className="flex justify-center shadow-inner">
        <div
          className={`w-[280px] md:w-[340px] py-[60px] my-[20px] rounded-3xl ${glassCardStyle}`}
        ></div>
      </div>
      <div className="w-[230px] md:w-[340px] flex flex-row items-center justify-between">
        <div
          className={`w-12 h-12 md:w-20 md:h-20 rounded-full ${glassCardStyle}`}
        />

        <div className="flex flex-col mr-[20px] justify-between">
          <div
            className={`w-[160px] md:w-[220px] md:h-[30px rounded-xl ${glassCardStyle} shadow-inner`}
          />
          <div
            className={`mt-[10px] w-[120px] md:w-[170px] md:h-[20px] rounded-xl shadow-inner ${glassCardStyle}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollCard;
