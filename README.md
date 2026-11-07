# MANUALMAC — loja digital de documentação técnica

Starter inicial em Next.js para a loja de manuais e catálogos técnicos.

## Definições do projeto
- Marca: MANUALMAC
- Domínio: preencher com o endereço completo confirmado no Registro.br
- Idiomas planejados: português, inglês e espanhol
- Moeda: real brasileiro (BRL)
- Catálogo inicial: até 500 documentos
- Modelo: preço individual por documento
- Acesso: leitura no site e download após confirmação do pagamento, enquanto a conta estiver ativa

## Executar localmente
Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Publicar na Vercel
1. Crie um repositório GitHub vazio.
2. Envie todos os arquivos desta pasta para o repositório.
3. Na Vercel, escolha Add New → Project e importe esse repositório.
4. Não configure variáveis de ambiente até criar/conectar o projeto Supabase.
5. Faça o primeiro deploy de teste.
6. Adicione o domínio somente depois de confirmar o endereço completo registrado.

## O que este starter já contém
- Página inicial responsiva com identidade MANUALMAC.
- Vitrine com produtos demonstrativos.
- Estrutura inicial de internacionalização e BRL.
- Esquema SQL para catálogo, pedidos, pagamentos e permissões.
- Documentação para integração posterior.

## O que ainda NÃO está pronto para receber vendas
- Cadastro/login real de clientes.
- Cadastro real de produtos e upload seguro de PDFs.
- Checkout real Pix/cartão.
- Webhook de confirmação do Mercado Pago.
- Biblioteca privada com leitor PDF e links temporários.
- Painel administrativo conectado ao banco.
- Textos legais, suporte e políticas comerciais.

Não aceite pagamentos nem publique documentos até concluir e testar essas partes. Os produtos exibidos são exemplos e não correspondem a ofertas reais.
