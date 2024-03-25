import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useCallback } from "react";

const surveyJson = {
  elements: [
    {
      name: "FirstName",
      title: "Enter your first name:",
      type: "text",
    },
    {
      name: "LastName",
      title: "Enter your last name:",
      type: "text",
    },
  ],
};
const Home = () => {
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);
  const survey = new Model(surveyJson);
  survey.onComplete.add(alertResults);
  return <Survey model={survey} />;
};

export default Home;
