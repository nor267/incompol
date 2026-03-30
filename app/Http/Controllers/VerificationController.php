<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class VerificationController extends Controller
{
    /**
     * Confirmação do email
     */
    public function __invoke(Request $request, $id, $hash)
    {
        $customer = Client::findOrFail($id);

        if (!URL::hasValidSignature($request)) {
            abort(403, 'Invalid or expired verification link.');
        }

        if (! hash_equals($hash, sha1($customer->getEmailForVerification()))) {
            abort(403, 'Invalid verification link.');
        }

        if (! $customer->hasVerifiedEmail()) {
            $customer->markEmailAsVerified();
        }

        return redirect()->to('/verify-email');
    }
}
