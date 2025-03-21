# SENG8120 Modern Automated Testing 

## Purpose

This repository houses the code we require for examples and assignments.

## Repository Usage

This repository will contain branches of code.

Please refer to your instructor's directions on how to use this repository.

## Branch Usage

**Installing The Dependencies**

You will need to install dependencies by using:

```bash
npm install
```

**Running The Project**

To run the project, you must first build the project:

```bash
npm run build
```

followed by:

```bash
npm start
```

Note:  if you make a change in the production code, you must `build` & `start`.
Otherwise, your changes will not be reflected.

**Running The Tests**

To run the tests, you can use

```bash
npm run test
```

To keep the tests running, you can use

```bash
npm run test -- --watch
```

To run a specific test, you can use

```bash
npm run test [my test name]
```
# Canvas Size Calculator

## Core Functionality

- Function `calculateCanvasSize` calculates canvas size using `length * width`.
- Accepts string inputs and converts them to numbers.

## Input Handling

- Handles valid inputs (e.g., `"10"`, `"100"` → `1000`).
- Handles edge cases:
  - Zero inputs (`"0"`, `"100"` → `0`).
  - Negative inputs (`"-10"`, `"10"` → `-100`).
  - Decimal inputs (`"10.5"`, `"100.5"` → `1055.25`).
  - Very large numbers (`"1e6"`, `"1e6"` → `1e12`).
- Returns `NaN` for invalid inputs:
  - Empty strings (`""`, `"100"` → `NaN`).
  - Non-numeric strings (`"abc"`, `"100"` → `NaN`).
  - `null` or `undefined` inputs.

## Unit Tests

- Tests for valid inputs, edge cases, and invalid inputs.
- Ensures correct calculation and error handling.

## Integration Tests

### UI Integration

- Mock UI component (`CanvasSizeForm`) displays canvas size.
- Handles valid and invalid inputs.

### Validation Integration

- Validates inputs before calculation.
- Ensures only valid inputs are processed.

## Technologies Used

- TypeScript for implementation.
- Jest for testing.

## How to Use

- Import `calculateCanvasSize` and pass length and width as strings.
- Run tests using `npm test`.

# Paint Required Calculator

## Core Functionality

- Function `paintRequiredCalculator` calculates the amount of paint required using the formula:

paintRequired = area / coveragePerLiter

- Accepts numeric inputs for `area` and `coveragePerLiter`.

## Input Handling

- Handles valid inputs (e.g., `area = 50`, `coveragePerLiter = 10` → `5` liters).
- Handles edge cases:
- Area is `0` → `0` liters.
- Coverage per liter is `0` → Throws an error (division by zero).
- Negative inputs → Throws an error.
- Decimal inputs (e.g., `area = 50.5`, `coveragePerLiter = 10.5` → `4.809` liters).
- Very large numbers (e.g., `area = 1e6`, `coveragePerLiter = 1e3` → `1000` liters).

## Unit Tests

- Tests for valid inputs, edge cases, and invalid inputs.
- Ensures correct calculation and error handling.

## Integration Tests

### UI Integration

- Mock UI component (`PaintRequiredForm`) displays the amount of paint required.
- Handles valid and invalid inputs.

### API Integration

- Mock API fetches `area` and `coveragePerLiter` and calculates paint required.
- Handles invalid data from the API.

### Validation Integration

- Validates inputs before calculation.
- Ensures only valid inputs are processed.

## Technologies Used

- TypeScript for implementation.
- Jest for testing.

## How to Use

- Import `paintRequiredCalculator` and pass `area` and `coveragePerLiter` as numbers.
- Run tests using `npm test`.
