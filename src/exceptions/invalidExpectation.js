class InvalidExpectation {
    invalidExpectation(expectation) {
        if(!expectation || Number.isNaN(Number(expectation)) || expectation < 0) throw new Error("A valid Expectation is required. Please note that only numbers are allowed.")
    }
}
export default InvalidExpectation