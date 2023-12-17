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

const getNumericValue = (value) => {
  return value.replace(/[^0-9.]/g, "");
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const quarters = ["Q1", "Q2", "Q3", "Q4"];
const days = [...Array(30)];
const TAB1 = 'tab1';
const TAB2 = 'tab2';
const EQUAL = 'equal';
const MANUAL = 'manual'

export { renderSelectOptions, getNumericValue, months, quarters, days, TAB1, TAB2, EQUAL, MANUAL };
