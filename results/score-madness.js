
export default scoreMadness;

function scoreMadness(madness) {
    if (madness <= 0) {
        return 'dead';
    } else {
        return 'alive';
    }
};