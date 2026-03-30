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
                                            <img src="https://incompolv2.nor267.com/logoblue.png" alt="Incompol Logo">
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <h1>Change your password</h1>
                                    </td>
                                </tr>
                            </table>
                            <p>Hello {{ $customer_name }},</p>
                            <p>We've received a request to reset your Incompol account password. You can now do so by
                                clicking on the button below.
                                This link will expire in 5 hours.</p>


                            <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                style="border-collapse: collapse; " align="center">
                                <tr>
                                    <td align="center" style="padding: 20px;">
                                        <a href="{{ $verify_url }}"
                                            style="
                                                    display: inline-block;
                                                    background-color: #1e22aa;
                                                    color: #FFF;
                                                    text-decoration: none;
                                                    padding: 12px 30px;
                                                    border-radius: 8px;
                                                    font-family: Arial, sans-serif;
                                                    font-size: 16px;
                                                    font-weight: bold;
                                                ">
                                            Reset password
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <p>
                                If you didn't request this change or if you'd no longer like to create a new password,
                                you can safely ignore this email</p>

                            <div style="border-top: 1px solid #1e22aa">
                                <p>Have a question? You can reach out us via <a
                                        href="mailto:incompol@incompol.pt">incompol@incompol.pt</a></p>

                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
