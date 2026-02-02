<!DOCTYPE html>
<html>

<body style="font-family: Arial, sans-serif; margin-top: 50px">
    <!-- Outer wrapper -->
    <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
        <tr>
            <td align="center">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px;">
                    <tr>
                        <td>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                style="border-collapse: collapse; " align="center">
                                <tr>
                                    <td align="center">
                                        <a href="https://incompol.pt">
                                            <img src="https://incompolv2.nor267.com/images/logo-blue.svg"
                                                alt="Incompol">
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <h1>Uma nova candidatura</h1>
                                    </td>
                                </tr>
                            </table>

                            <div style="margin-top: 50px; text-align:left;">
                                <h4>Informações</h4>
                                <p style="line-height: 15px;">Nome: {{ $name }}</p>
                                <p style="line-height: 15px;">Email: {{ $email }}</p>
                                <p style="line-height: 15px;">Contacto: {{ $phone }}</p>
                                <p style="line-height: 15px;">Messagem: {{ $body }}</p>
                            </div>

                            <a>Para ver o currículo</a>
                            <a href={{ $pdf_content }} style="text-color: #1E22AA;">
                                clique aqui</a>
                            <br>
                            <br>

                            <p>Esta é uma mensagem automática enviada a partir do site incompol.pt
                            </p>
                            <p>Não responder</p>
                            <p>Criado e designado por Nor267</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
