public class PSMockPaymentController {
    @AuraEnabled
    public static String makePayment()
    {
        Map<String, Object> resp = new Map<String, Object>();
        resp.put('transactionId', genRandomTranId(11));
        resp.put('transactionMsg', 'I00001:Successful.');
        
        return JSON.serializePretty(resp);
    }

    private static String genRandomTranId(Integer len)
    {
        final String chars = '1234567890';
        String randStr = '';
        while (randStr.length() < len) {
            Integer idx = Math.mod(Math.abs(Crypto.getRandomInteger()), chars.length());
            randStr += chars.substring(idx, idx+1);
        }
        return randStr;
    }
}