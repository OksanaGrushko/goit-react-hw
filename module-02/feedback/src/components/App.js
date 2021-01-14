import React, { Component } from "react";
import Layout from "./Layout/Layout";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleIncrement = (statisticName) => {
    this.setState((prevState) => {
      return {
        [statisticName]: (prevState[statisticName] += 1),
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, e) => {
      acc += e;
      return acc;
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    return this.state.good !== 0
      ? Math.trunc((this.state.good / this.countTotalFeedback()) * 100)
      : this.state.good;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Layout>
          <Section title="Please leave feedback">
            <FeedbackOptions onLeaveFeedback={this.hendleIncrement} />
          </Section>
          <Section title="Statistics">
            {total !== 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="No feedback given" />
            )}
          </Section>
        </Layout>
      </>
    );
  }
}
