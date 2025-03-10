document.addEventListener('DOMContentLoaded', function() {
    const addProductBtn = document.getElementById('addProductBtn');
    const productRowsContainer = document.getElementById('productRowsContainer');
    const dataForm = document.getElementById('dataForm');

    // Function to create a new product row
    function createProductRow() {
        const productRow = document.createElement('div');
        productRow.classList.add('product-row');

        const productInput = document.createElement('input');
        productInput.type = 'text';
        productInput.classList.add('product-input');
        productInput.placeholder = 'Enter product name';
        productInput.required = true; // Make the input required

        const removeProductBtn = document.createElement('button');
        removeProductBtn.type = 'button';
        removeProductBtn.classList.add('remove-product-btn');
        removeProductBtn.innerHTML = '<i class="fas fa-trash"></i>';

        removeProductBtn.addEventListener('click', function() {
            productRow.remove();
        });

        productRow.appendChild(productInput);
        productRow.appendChild(removeProductBtn);

        return productRow;
    }

    // Add initial product row
    productRowsContainer.appendChild(createProductRow());

    // Add new product row on button click
    addProductBtn.addEventListener('click', function() {
        productRowsContainer.appendChild(createProductRow());
    });

    // Handle form submission
    dataForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Check if the form is valid
        if (!dataForm.checkValidity()) {
            dataForm.reportValidity();  // Reports the validation problems (browser's default)
            return; // Stop further execution if the form is invalid
        }

        const formerName = document.getElementById('formerName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const address = document.getElementById('address').value;
        const visitorName = document.getElementById('visitorName').value;

        // Get product list from the input fields
        const productInputs = productRowsContainer.querySelectorAll('.product-input');
        const productList = Array.from(productInputs).map(input => input.value);

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();
        pdf.setFontSize(12);

        let yOffset = 10;

        pdf.text(`Former Name: ${formerName}`, 10, yOffset);
        yOffset += 10;

        pdf.text(`Phone Number: ${phoneNumber}`, 10, yOffset);
        yOffset += 10;

        pdf.text(`Address: ${address}`, 10, yOffset);
        yOffset += 10;

        pdf.text(`Visitor Name: ${visitorName}`, 10, yOffset);
        yOffset += 10;

        // Add product list to PDF
        pdf.text("Product List:", 10, yOffset);
        yOffset += 10;
        productList.forEach(product => {
            pdf.text(`- ${product}`, 20, yOffset);
            yOffset += 10;
        });

        pdf.save('data.pdf');
    });
});