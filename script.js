// JSON URL
const url = "https://sunnyji7256.github.io/kgs_batch_list/New_Sunny.json";

fetch(url)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('classes-container');

        data.forEach(cls => {
            const div = document.createElement('div');
            div.className = 'class-item';
            
            // Example structure - customize according to your JSON keys
            div.innerHTML = `
                <h3>${cls.name}</h3>
                <p><strong>Teacher:</strong> ${cls.teacher}</p>
                <p><strong>Batch Time:</strong> ${cls.time}</p>
                <p><strong>Subjects:</strong> ${cls.subjects.join(', ')}</p>
            `;
            container.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
        const container = document.getElementById('classes-container');
        container.innerHTML = "<p>डेटा लोड करने में त्रुटि।</p>";
    });
