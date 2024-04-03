var nome = (prompt('Qual o seu nome?'));
alert("Olá " + nome + ", " + "é um prazer ter você por aqui!");


var saldo = 0; //Float
		function inicio() {

			var escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Extrato 3.) Saque 4.) Deposito 5.) Transferencia 6.) Sair'));

			switch (escolha) {
        case 1:
            ver_saldo();
            break;
        case 4:
            fazer_deposito();
            break;
        case 3:
            fazer_saque();
            break;
        case 6:
            sair();
            break;
				case 2:
						ver_extrato();
						break;
				case 5:
					fazer_transferencia();
						break;
        default:
            erro();
            break;
    }
		}


		function ver_saldo() {
			var senha = parseFloat(prompt('Digite sua senha.'));
			if (senha===3589){
			alert('Seu saldo atual é: ' + saldo);
			inicio();
			}
			else{
				alert('Senha incorreta!');
				inicio();
			}
		}

		function ver_extrato() {
			var senha3 = parseFloat(prompt('Digite sua senha.'));
			if (senha3===3589){
			alert("Seu extrato: Saque: 500 Deposito: 1000 " );
			inicio();
			}
			else{
				alert('Senha incorreta!');
				inicio();
			}
		}


		function fazer_transferencia() {
			var transferencia = parseFloat(prompt('Qual é o número da conta?'));
			var valor_transferencia = parseFloat(prompt('Qual valor deseja transferir?'))
			if (isNaN(transferencia) || transferencia === ''){
				alert('Por favor, informe um número');
				fazer_transferencia();
			}
			else if (transferencia<0) {
        alert('Por favor, informe um número valido');
				fazer_transferencia();
			}
			if (isNaN(valor_transferencia) || valor_transferencia === ''){
				alert('Por favor, informe um valor');
				fazer_transferencia();
			}
			else if (valor_transferencia>saldo || valor_transferencia<=0) {
        alert('Operação não autorizada.');
				inicio();
			}

			else {
        saldo -= valor_transferencia;
        ver_saldo();
    }
		}

		function fazer_deposito() {
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
			// Not a Number
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número:');
				fazer_deposito();
			}
			
			else if(deposito <= 0) {
				alert('Operação não autorizada.');
				inicio();
			}
			
			else {
				saldo += deposito;
				ver_saldo();
			}
		}

		function fazer_saque() {
			var saque = parseFloat(prompt('Qual o valor para saque?'));
	
			if (isNaN(saque) || saque === '' || saque <= 0) {
					alert('Operação não autorizada. Por favor, informe um valor válido para saque.');
					inicio();
			} else if (saque > saldo) {
					alert('Operação não autorizada. Saldo insuficiente.');
					inicio();
			} else {
					var senha2 = parseFloat(prompt('Digite sua senha:'));
	
					if (senha2 === 3589) {
							saldo -= saque;
							ver_saldo();
					} else {
							alert('Senha incorreta! Operação não autorizada.');
							inicio();
					}
			}
	}

		function erro() {
			alert('Por favor, informe um número entre 1 a 6');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert(nome + ", foi um prazer ter você por aqui!");
				window.close();
			} else {
				inicio();
			}
		}

		
		
		inicio();