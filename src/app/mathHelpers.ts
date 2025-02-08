export function mapValueGrowing(input: number, minInput: number, maxInput: number): number {

    const minOutput = 0;   // Minimum value in the output range
    const maxOutput = 1;   // Maximum value in the output range

    var val = input
    // Ensure the input is within the expected range
    if (input < minInput) {
      val = minInput
    }
    if (input > maxInput) {
      val = maxInput
    }

    // Linear mapping formula
    return (val - minInput) / (maxInput - minInput) * (maxOutput - minOutput) + minOutput;
  }

  export function mapValueShrinking(input: number, minInput: number, maxInput: number): number {

    const minOutput = 0;   // Minimum value in the output range
    const maxOutput = 1;   // Maximum value in the output range

    var val = input
    // Ensure the input is within the expected range
    if (input < minInput) {
      val = minInput
    }
    if (input > maxInput) {
      val = maxInput
    }

    // Linear mapping formula
    return 1 - (val - minInput) / (maxInput - minInput) * (maxOutput - minOutput) + minOutput;
  }