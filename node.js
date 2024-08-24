
// Package import
import { Reclaim } from '@reclaimprotocol/js-sdk';
  
const getVerificationReq = async () => {
      const reclaimClient = new Reclaim.ProofRequest("0x524b4Cce00F587E202BE491FA610392ecf71B0fe" );
      const providerIds = [
        'da2bbda9-90c1-403f-b805-0d424502cfd8', // Luma Attendance
  '475b5501-427b-47c8-b007-fb7837cd8b5c', // Twitter Credentials
  'fdaea3c3-86af-459a-bb21-1b6b90146766', // reddit username
  '66a8fccd-42bb-4cd8-8ccc-6897eccf3d0a', // Arbitrum Forum Stats
  'aebc5388-7f9b-4811-81e9-642ec4bfe214', // Twitter Username
  '89bec1a0-aa09-4300-b6fe-59e79872c490', // X.com Followers
  '015a2075-26ab-49f7-931b-55824d8a0390', // EtherscanTransactions
  '5622b4ea-b953-4cd9-a377-409bb7ed5ec5', // Total GitHub Repositories
  'd8cb9070-aeef-4176-85e3-1a7291c732dd', // Arbitrum DIscourse Badge count
  'e3f6a09c-314f-463d-9ad2-cff849e6f774', // X_username
  'f07e89d8-7d64-4915-8859-33b38b16465f', // Twitter - Verify username
  '329cfdf0-f81c-40e2-a3af-3fbae4728c4f', // Yearly Contributions
  'a09df809-ea2d-4413-ab2f-0d83689e388d', // X Username
  '67ca45bb-4be6-4516-8d60-9d0707686b68', // ENS forum - badges 
  '61263296-8cc7-4f35-9ab6-6816c7abffc6', // EthAddress
  '70a18996-a878-4af8-b9e1-04047a66435e', // blockchain account tester
  '6d3f6753-7ee6-49ee-a545-62f1b1822ae5', // GitHub UserName
  '01b5d40a-9bd7-401c-be16-6398a12ac99b', // test_ethglobal
  '4ceca529-3f65-4d97-aaf4-c943c3683fb6', // address
  'f9f383fd-32d9-4c54-942f-5e9fda349762', // Gmail Account
  '6d3f6753-7ee6-49ee-a545-62f1b1822ae6', // identity_github00 
  '88522731-fc83-473a-98bd-2e5c320b2e67', // Gitlab Username
  '70a3943f-f5f5-4bdf-88bb-8518967adc04', // Username Gitlab
  '05a9c47e-274b-491d-92cc-9fa48210b59a', // identity_github01
  '4df07f93-c319-446d-9d37-000c7bc8048a', // Luma UserId 3.0
  '19f981dd-03ed-4f91-8686-d671200dcc35', // Unidays ID 
      ];
      const APP_SECRET =0xac2a4e3829765d1c750c4c8be7c16587304881172ffd1d070d10423f207e915f  // your app secret key.
      
      await reclaimClient.buildProofRequest(providerIds[0])
      reclaimClient.setSignature(
          await reclaimClient.generateSignature(
            APP_SECRET
        )
      )
      const {reclaimUrl, statusUrl} = await reclaimClient.createVerificationRequest()
      return {reclaimUrl, statusUrl}
  }
