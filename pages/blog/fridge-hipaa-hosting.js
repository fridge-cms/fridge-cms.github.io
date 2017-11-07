import post, { getPost } from 'components/post'
import markdown from 'markdown-in-js'

export default post(getPost('fridge-hipaa-hosting'), markdown`
Starting today Fridge now has a HIPAA compliant offering for anyone that needs to securely store PHI data.

## Encryption Everywhere

Fridge has always been an advocate of using encryption for data communications, and to further that vision, now provides encryption at rest for all databases and files. This bridges the gap for providing a truly HIPAA compliant service.

## Audit Trails

Fridge now provides audit trails for all document and user access. A key factor to auditors during an audit.

## Availability

HIPAA compliant Fridges are available by request for professional plan accounts. Contact [support](mailto:support@fridgecms.com) to get started! 
`)
