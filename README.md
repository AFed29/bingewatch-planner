# TDD BingeWatch Planner Lab

### Learning Objectives

- Be able to TDD an application composed of multiple classes

## Brief

You have been asked to model a TV show binge watching planner app, implementing TDD throughout. A user should be able to select a TV show and see how long it would take to binge watch it in its entirety.

You will need to implement the following classes:

MVP:

- `Season`
- `TVShow`

Extension:

- `Bingewatch`

A `TVShow` contains a collection of `Season`s. These classes will be responsible for representing data. The `BingeWatch` class will be responsible for analysing that data.

## MVP

A `Season` should have:

- A number
- A duration (in minutes)

---

A `TVShow` should have:

- A name
- A collection of `Seasons`

A `TVShow` should be able to:

- Calculate the total duration of all of its `Seasons` (in minutes)

## Extensions

`BingeWatch` should be able to:

- Given a `TVShow` and the number of hours that the user would like to watch per day, calculate the number of days that it would take to watch the `TVShow` in its entirety.
