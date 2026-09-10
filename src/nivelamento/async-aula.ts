// importando função aguardar
import {aguardar} from "../../utils/helpers";

// simulando uma api de login com promises
function simularLogin(usuario: string, senha: string): Promise <string>{
    return new Promise((resolve, reject) => {
        if(usuario === "admin" && senha === "123456"){
            resolve("token-secreto-correto-123456");
        } else {
            reject("Erro: Credenciais inválidas.");
        }
    });
};

// função principal async/await
async function executarCT(){
    console.log("Iniciando cenário de teste...");
    try{
        console.log("Passo 1: Abrindo Tela de Login...");
        await aguardar(2000);
        console.log("Passo 2: Inserindo credenciais...");
        await aguardar(3000);
        const token = await simularLogin("admin", "123456");
        console.log("Passo 3: Validando resultado do login...");
        console.log(`Login realizado com sucesso! Token: ${token}`);
    } catch (error) {
        console.error("Erro ao executar cenário de teste: ", error);
    } finally {
        console.log("Cenário de teste finalizado.");
    }
};

executarCT();