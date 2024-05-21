<?php
// Konfigurasi koneksi ke database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "feedback";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
// Memeriksa apakah data sudah dikirim dari formulir
// Memeriksa apakah data sudah dikirim dari formulir
if (isset($_POST['submit'])) {
    // Mengambil nilai yang dikirim dari formulir
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // SQL untuk menyimpan data ke dalam tabel feedback
    $sql = "INSERT INTO feedback (name, email, message) VALUES ('$name', '$email', '$message')";
    $query = mysqli_query($conn, $sql);

    if ($query) {
        header('Location: CONTACT.html');
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "Ada field yang kosong. Silakan lengkapi formulir.";
}
?>
