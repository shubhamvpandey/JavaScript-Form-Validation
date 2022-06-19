<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="FormDesign.css" />
        <script type="text/javascript" src="FormValidation.js"></script>
        <title>User Details</title>
    </head>

    <body>
        <?php
		
		include 'dbconnect.php';
        
		$name = $_POST['uname'];
		$password = $_POST['password'];
		$email = $_POST['email'];
		$country = $_POST['country'];
		
		if(isset($_POST['uname']) && isset($_POST['password'])) {
				
			$sql = "INSERT INTO `employees`(`name`, `password`, `email`, `country`) VALUES ('$name', '$password', '$email', '$country')";

			if ($conn->query($sql) === TRUE) {
			  echo "New record created successfully";
			} else {
			  echo "Error: " . $sql . "<br>" . $conn->error;
			}
			
		}
		$sql = "SELECT `id`, `name`, `password`, `email`, `country` FROM `employees`";
		$result = $conn->query($sql);
		
		if(isset($_GET['id'])) {
			
			// sql to delete a record
			$sql = "DELETE FROM employees WHERE id=".$_GET['id'];

			if ($conn->query($sql) === TRUE) {
			  echo "Record deleted successfully";
			} else {
			  echo "Error deleting record: " . $conn->error;
}
			
		}
				
		?>
		
		<h2>Employess List</h2>
		
		<table border='1' cellpadding="5" cellspacing="5">
			<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Password</th>
					<th>Email</th>
					<th>Country</th>					
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>			
		<?php
		if ($result->num_rows > 0) {
		  // output data of each row
		  while($row = $result->fetch_assoc()) {
			echo "<tr>";
			echo "<td>".$row['id']."</td>";
			echo "<td>".$row['name']."</td>";
			echo "<td>".$row['password']."</td>";
			echo "<td>".$row['email']."</td>";
			echo "<td>".$row['country']."</td>";
			echo "<td><a href='userdetails.php?id=".$row['id']."'>Delete</a></td>";
			echo "</tr>";
			}
		} else {
			echo "<td colspan='6'>No records Found</td>";
		}
       
		mysqli_close($conn);
        ?>
			</tbody>
		</table>	
	
    </body>    
</html>