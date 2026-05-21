// All the mpesa integrations will live

//1. Generating an access token.
// GET, has parameters,
/**
 *
 *
 */

// environment -> sensitive variables (API Keys, PATHS, files)
const SANDBOX_MPESA_CONSUMER_KEY = "";
const SANBOX_MPESA_CONSUMER_SECRET = "";

// CK:CS
async function getMpesaAccessToken() {
  try {
    const binaryString = `${SANDBOX_MPESA_CONSUMER_KEY}:${SANBOX_MPESA_CONSUMER_SECRET}`;
    const encodedBase64AuthDtls = btoa(binaryString);
    // console.log(encodedBase64AuthDtls);

    const response = await fetch(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${encodedBase64AuthDtls}`,
          "Content-Type": "application/json",
        },
      },
    );

    const dtls = await response.json();
    console.log(dtls);
    return dtls;
  } catch (error) {
    console.error(error);
  }
}

async function sendMpesaSTKPush() {
  try {
    /**
     * 1. Dot notation -> most commonly used
     * 2. Destructuring of object -> better way (details are not null!!!)
     */
    const { access_token } = await getMpesaAccessToken(); // destructuring of objects
    const passkey = "";
    const BusinessShortCode = 174379;

    /***
     * YYYYMMDDHHmmss
     */
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth(); // returns single digit 1-12 ->
    const formattedMonth = `0${month}`; //string interpolation
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const Timestamp = `${year}${formattedMonth}${day}${hours}${minutes}${seconds}`;

    const password = btoa(`${BusinessShortCode}${passkey}${Timestamp}`); //passkey + shortcode + timestamp
    const paymentDtls = {
      BusinessShortCode: "174379",
      Password: password,
      Timestamp: Timestamp,
      TransactionType: "CustomerPayBillOnline", // Paybill -> Business short code -> account number (Sim toolkit)
      Amount: "1",
      PartyA: "254712345678", // your phone number of choice
      PartyB: "174379",
      PhoneNumber: "254712345678", // your phone number of choice
      CallBackURL: "",
      AccountReference: "123456789",
      TransactionDesc: "Integration",
    };

    const response = await fetch(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentDtls),
      },
    ); //GET BY DEFAULT ->

    //HEADERS ARE USED IN ADDING METADATA -> SECURITY, OR PASSING DATA
    const resDtls = await response.json();
    console.log(resDtls);
    return resDtls;
  } catch (error) {
    console.log(error);
  }
}

// getMpesaAccessToken();
sendMpesaSTKPush();
