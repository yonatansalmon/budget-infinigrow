const renderSelectOptions = (budgetFrequency) => {
  const options = [
    { value: "annually", label: "Annually" },
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" },
  ];

  const currentIndex = options.findIndex((opt) => opt.value === budgetFrequency);
  if (currentIndex > -1) {
    const [currentOption] = options.splice(currentIndex, 1);
    options.unshift(currentOption);
  }

  return options.map((opt) => (
    <option key={opt.value} value={opt.value}>
      {opt.label}
    </option>
  ));
};


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const quarters = ["Q1", "Q2", "Q3", "Q4"];
const days = [...Array(30)]

export { renderSelectOptions, months, quarters, days};
