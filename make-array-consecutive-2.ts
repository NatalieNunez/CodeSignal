const makeArrayConsecutive2 = (statues: number[]): number => {
    let additionalStatuesNeeded = 0;
    let sortedStatues = statues.sort((a,b) => a - b);
    for (let i = 0; i < sortedStatues.length - 1; i++) {
        let isConsecutive = sortedStatues[i] + 1 === sortedStatues[i + 1];
        if (!isConsecutive) {
            let difference = (sortedStatues[i + 1] - sortedStatues[i]) - 1;
            additionalStatuesNeeded += difference
        }
    }
    return additionalStatuesNeeded;
}
