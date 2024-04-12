<?php
// Assuming your MySQL server credentials
$servername = "localhost";
$username = "root";
$password = "";
$database = "swami"; // your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the posted data
$data = json_decode(file_get_contents("php://input"));

// Prepare and bind statement
$stmt = $conn->prepare("INSERT INTO bmi (username, gender, phoneNumber, email, password) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $data->username, $data->gender, $data->phoneNumber, $data->email, $data->password);

// Execute the statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close the connection
$stmt->close();
$conn->close();
?>
