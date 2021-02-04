/*
 * @findByTestAttr
 * function to find the testing element
 * by pasing wrapper and selector
 */
export const findByTestAttr = (wrapper, selector) => wrapper.find("[data-test='"+selector+"']");