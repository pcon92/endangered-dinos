
export default function saveScoreToLocal(score) {

    if (score > localStorage.getItem('score')) {
        localStorage.setItem('score', JSON.stringify(score));
    } 

    return null;

};