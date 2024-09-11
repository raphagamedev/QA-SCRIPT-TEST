describe('logando no illi', () => {
    it('passes', () => {
      cy.visit('http://end-point')
  
      // ---------------------------------------------
      //#############################################
      //            LOGIN DE USUÁRIO
       
  
      // Preenchendo o campo de login
      cy.get('[name="login"]').type('raphael');
  
      // Executando JavaScript para definir o valor do campo de senha
      cy.get('[name="senha"]').then(($input) => {
        $input.val('i123').trigger('change');
      });
  
      cy.wait(1000);
  
      // Clicando no botão de entrada forçando o clique mesmo que o botão esteja desativado
      cy.contains('button', 'Entrar').click({force: true});
      // Clicar no botão de entrada novamente
      cy.contains('button', 'Entrar').click();
  
      
      // ---------------------------------------------
      //#############################################
      //            MODULO PRODUTO
     
      cy.wait(10000);
  
      cy.get('#button-1605-btnIconEl').click({force: true});
  
  
      // ---------------------------------------------
      //#############################################
      //     MODULO DE CARACTERISTICA DO PRODUTO 

      cy.get('#button-1614-btnInnerEl').click({force: true});

      // ---------------------------------------------
      //clica no botão "incluir"
      cy.wait(5000);
      cy.get('#button-1750-btnInnerEl').click({force: true});

      //---------------------------------------------
      //adiciona o nome desejado no campo "Codigo"
    
      cy.wait(5000);
      cy.get('#numberfield-1822-inputEl').type('1');

      // ---------------------------------------------
      //adiciona o nome desejado no campo "Nome"
      cy.wait(5000);
      cy.get('#textfield-1823-inputEl').type('CARACTERISTICA_VEIO_DO_CY');

      //---------------------------------------------
      //salva o processo
    
      cy.get('#button-1830-btnIconEl').click({force: true});

      //fim do processo de incluir uma caracteristica
      
    })
  })
