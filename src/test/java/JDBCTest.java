

import org.junit.jupiter.api.Test;

import java.sql.*;

import static org.junit.jupiter.api.Assertions.assertNotNull;


public class JDBCTest {
    @Test
    public void givenMssqlDb_thenCreateConnectionObject() {
        String jdbcUrl = "jdbc:sqlserver://localhost\\88b2dd66de36:1433;database=ASTRO;encrypt=true;trustServerCertificate=true;";

        String username = "sa";
        String password = "Fatfrog99";
        try{
            Connection conn = DriverManager.getConnection(jdbcUrl, username, password);
            assertNotNull(conn);

            Statement stmt = conn.createStatement();
            ResultSet rs;

            rs = stmt.executeQuery("USE ASTRO;SELECT * from messier_catalog");
            while ( rs.next() ) {
                String M = rs.getString("M");
                String name = rs.getString("Name");
                System.out.println(M + "        " + name);
            }

            conn.close();
        }
        catch (SQLException e) {
            System.err.format("SQL State: %s\n%s", e.getSQLState(), e.getMessage());
        }
    }

}
