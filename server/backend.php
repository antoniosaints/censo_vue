<?php
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
// Permitir credenciais (se necessário)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");

// Defina a idade máxima para o cabeçalho CORS em cache (em segundos)
header("Access-Control-Max-Age: 3600");
class Main
{
    protected $host = 'localhost';
    protected $user = 'root';
    protected $pass = '';
    protected $db = 'gestaozap';
    private function connection()
    {
        try {
            $conection = new PDO("mysql:host={$this->host};dbname={$this->db};charset=utf8", "{$this->user}", "{$this->pass}");
            $conection->setAtTribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }

        return $conection;
    }

    public function getServers()
    {
        $conn = $this->connection();

            $sql = "SELECT * FROM zapi_servers";

            try {
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                return $stmt->fetchAll(PDO::FETCH_ASSOC);

            } catch (PDOException $e) {
                // Tratamento de erro
                echo 'Erro ao buscar dados: ' . $e->getMessage();
                return false;
            }
    }
}

echo json_encode((new Main())->getServers());
