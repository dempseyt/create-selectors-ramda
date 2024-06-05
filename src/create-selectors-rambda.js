import * as R from "ramda";

function createSelectors(selectorSpecifications) {
  const selectors = {
    selectState: selectorSpecifications._selector ?? R.identity,
  };
  return selectors;
}

export default createSelectors;
