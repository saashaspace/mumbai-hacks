// Assuming you have a JSON data source
const fetchData = async () => {
    const response = await fetch('your_data_source.json');
    const data = await response.json();

    const positiveCount = data.filter(item => item.sentiment === 'positive').length;
    const negativeCount = data.filter(item => item.sentiment === 'negative').length;

    document.getElementById('positive-count').textContent = positiveCount;
    document.getElementById('negative-count').textContent = negativeCount;
};

fetchData();