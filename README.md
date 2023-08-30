# Cairo-1-Account

# Cairo-1-Account ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/amanusk/starknet-foundry-template/blob/main/LICENSE)

Example of an Cairo 1 account for Starknet, with a simple public key
The account class hash: `0x5751eba776086d56e9836e2f59edb02613caabaa5bbce1833fd54fd719ec5e7`

This repo requires `Scarb 0.6.0`

Install Scarb with:

```
asdf plugin add scarb
asdf install scarb latest
```

(See more instructions for [asdf-scarb](https://github.com/software-mansion/asdf-scarb) installation

Install Starknet-Foundry with:

```
curl -L https://raw.githubusercontent.com/foundry-rs/starknet-foundry/master/scripts/install.sh | sh
```

(More instructions for [snforge](https://github.com/foundry-rs/starknet-foundry))

### Disclaimer

This is just an example, more features will be added as the language is improved while keeping it minimal

## Building

```
scarb build
```

## Testing

```
snforge
```

## Deployment

Deployment is handled by `sncast`. See `scripts.md` for examples

### Thanks

If you like it then you shoulda put a ⭐ on it
