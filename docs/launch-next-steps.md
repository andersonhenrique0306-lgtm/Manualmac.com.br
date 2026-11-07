# Próximas etapas para produção

1. Importar este repositório na Vercel e validar o deploy inicial.
2. Criar projeto Supabase, executar `supabase/schema.sql`, ativar RLS e escrever políticas completas.
3. Implementar autenticação e perfil de cliente.
4. Criar bucket privado de PDFs; fazer upload apenas pelo painel autorizado.
5. Criar painel administrativo protegido por função de administrador.
6. Implementar checkout Mercado Pago no servidor.
7. Implementar webhook assinado, consulta de pagamento e processamento idempotente.
8. Gerar direito de acesso apenas após confirmação real do pagamento.
9. Implementar leitor PDF e downloads com URLs assinadas curtas após checar conta ativa e compra paga.
10. Testar reembolso, chargeback, conta suspensa, duplicidade de webhook e segurança.
11. Publicar Termos, Privacidade, reembolso e suporte.
12. Só então liberar a loja para vendas.

Não colocar chaves secretas no navegador nem no repositório. Não publicar arquivos PDF em diretório público.
