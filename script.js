document.addEventListener('DOMContentLoaded', (event) => {
    // Function to handle API calls
    const makeApiCall = (endpoint, method, data = {}) => {
        return fetch(`/api/${endpoint}?api_key=7cb3a733683fc5ff53c3394b2ca8b28a8137c20f`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                // Here, we're assuming 'api_key' is passed as a query parameter. 
                // If it's supposed to be in the 'Authorization' header, you'd do:
                // 'Authorization': 'Bearer 7cb3a733683fc5ff53c3394b2ca8b28a8137c20f'
            },
            body: JSON.stringify(data)
        }).then(response => response.json());
    };

    // Event listener for buying data
    document.getElementById('dataForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const dataAmount = document.getElementById('dataAmount').value;
        if (dataAmount) {
            makeApiCall('data', 'POST', { amount: dataAmount })
                .then(data => {
                    alert('Data purchase successful: ' + JSON.stringify(data));
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error with your purchase.');
                });
        }
    });

    // Event listener for buying airtime
    document.getElementById('airtimeForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const phoneNumber = document.getElementById('phoneNumber').value;
        const airtimeAmount = document.getElementById('airtimeAmount').value;
        if (phoneNumber && airtimeAmount) {
            makeApiCall('airtime', 'POST', { phoneNumber: phoneNumber, amount: airtimeAmount })
                .then(data => {
                    alert('Airtime purchase successful: ' + JSON.stringify(data));
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error with your purchase.');
                });
        }
    });
});
