// Statistik angka dummy (bisa diganti API)
document.getElementById("todayVisitors").innerText = 76;
document.getElementById("totalVisitors").innerText = 2140;
document.getElementById("likedPosts").innerText = 182;
document.getElementById("podcastCount").innerText = 24;

// DATA GRAFIK
const ctx = document.getElementById('statsChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            'Jan','Feb','Mar','Apr','Mei','Jun',
            'Jul','Agu','Sep','Okt','Nov','Des'
        ],
        datasets: [{
            label: 'Pengunjung Per Bulan',
            data: [120, 150, 300, 280, 450, 520, 600, 580, 750, 820, 900, 1000],
            borderWidth: 3,
            borderColor: '#202020',
            backgroundColor: 'rgba(0,0,0,0.1)',
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});
