export const DailySchedule = () => {
  const dailyClasses = [
    { hour: "09:00 to 10:00", semester: "1", subject: "Mathematics" },
    { hour: "10:00 to 11:00", semester: "1", subject: "Language" },
  ];

  return (
    <div className="w-[350px] rounded-3xl bg-neutral-100 p-9 shadow-xl">
      <h1 className="mb-4 text-xl font-bold">Daily Schedule</h1>
      <div className="flex items-center justify-between text-neutral-400">
        <p>
          {new Date().getDate()} of{" "}
          {new Date().toLocaleString("default", { month: "long" })}
        </p>
        <p>...</p>
      </div>

      <div className="mt-2 flex flex-col gap-4 rounded-lg bg-white p-6">
        {dailyClasses.length > 0 &&
          dailyClasses.map((element) => (
            <div className="grid grid-cols-2 gap-4 divide-x-2 divide-black">
              <p className="flex items-center">{element.hour}</p>
              <div className="flex  flex-col items-start pl-3">
                <p className="text-neutral-400">semester {element.semester}</p>
                <p>{element.subject}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
