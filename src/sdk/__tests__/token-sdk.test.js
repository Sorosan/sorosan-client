import { describe, it, expect, vi } from 'vitest';
import { TokenSDK } from '../../sdk';
import { DEFAULT_NETWORK } from '../../lib/network';
import { TEST_PUBLIC_KEY, TEST_TOKEN_CONTRACT, TEST_WRAP_TOKEN_CONTRACT } from './utils';
import { Asset } from 'soroban-client';

describe("token-sdk", () => {
    it("should return the name of the token contract", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const expectedName = "Test Token";

        const actualName = await sdk.name(TEST_TOKEN_CONTRACT);

        expect(actualName).toEqual(expectedName);
    });

    it("should return the symbol of the token contract", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const expectedName = "TT";

        const actualName = await sdk.symbol(TEST_TOKEN_CONTRACT);

        expect(actualName).toEqual(expectedName);
    });

    it("should return the decimal value of the token contract", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const expectDecimal = 18;

        const actualDecimal = await sdk.decimal(TEST_TOKEN_CONTRACT);

        expect(actualDecimal).toEqual(expectDecimal);
    });

    it("should return the balance of the token contract", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const expectedBalance = 0;

        const balance = await sdk.balance(TEST_TOKEN_CONTRACT);
        const actualBalance = Number(balance);

        expect(actualBalance).toEqual(expectedBalance);
    });

    it("should return the balance of a specific address from the token contract", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const address = "GBHAOSNA7PJOGKWPAQ2VYAY4Y2VMA5LKOPQVCFRXJNJG5YXV4ELEX2GZ";
        const expectedBalance = 100000;

        const balance = await sdk.balance(TEST_TOKEN_CONTRACT, address);
        const actualBalance = Number(balance);

        expect(actualBalance).toEqual(expectedBalance);
    });

    it("should return the valid contract address for the valid code and a valid issuer", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const code = "XLM";
        const expectedContractAddress = "CCPSXW3UJUGXVKPUKQSKM4MEAWORXYAGHX3GEL6JRNSKKUJOGHJJFL4I";

        const actualContractAddress = await sdk.getContractAddressFromAsset(code, TEST_PUBLIC_KEY);

        expect(actualContractAddress).toEqual(expectedContractAddress);
    });

    it("should return an empty contract address for an valid issuer but invalid code", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const code = "";
        const expectedContractAddress = "";

        const actualContractAddress = await sdk.getContractAddressFromAsset(code, TEST_PUBLIC_KEY);

        expect(actualContractAddress).toEqual(expectedContractAddress);
    });

    it("should return the valid contract address for the native assets", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const code = "XLM";
        const expectedContractAddress = "CB64D3G7SM2RTH6JSGG34DDTFTQ5CFDKVDZJZSODMCX4NJ2HV2KN7OHT";

        const actualContractAddress = await sdk.getContractAddressFromAsset(code, "");

        expect(actualContractAddress).toEqual(expectedContractAddress);
    });

    it("should return an empty contract address for an invalid code and an invalide issuer (edge case)", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const code = "";
        const expectedContractAddress = "";

        const actualContractAddress = await sdk.getContractAddressFromAsset(code, "");

        expect(actualContractAddress).toEqual(expectedContractAddress);
    });

    it("should return an invalid balance contract address for an valid code and an invalid issuer", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const code = "USD";
        const expectedContractAddress = "";

        const actualContractAddress = await sdk.getContractAddressFromAsset(code, "");

        expect(actualContractAddress).toEqual(expectedContractAddress);
    });

    it("should return an invalid balance contract address for an valid code and an invalid issuer", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const expectedContractAddress = true;

        const actualValue = await sdk.isWrapped(TEST_WRAP_TOKEN_CONTRACT);

        expect(actualValue).toBeTruthy();
        expect(actualValue).toEqual(expectedContractAddress);
    });

    it("should return an invalid balance contract address for an valid code and an invalid issuer", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const expectedContractAddress = false;

        const actualValue = await sdk.isWrapped(TEST_TOKEN_CONTRACT);

        expect(actualValue).toBeFalsy();
        expect(actualValue).toEqual(expectedContractAddress);
    });

    it("should return an invalid balance contract address for an valid code and an invalid issuer", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const expectedContractAddress = false;

        const actualValue = await sdk.isWrapped("");

        expect(actualValue).toBeFalsy();
        expect(actualValue).toEqual(expectedContractAddress);
    });

    it("should return an invalid balance contract address for an valid code and an invalid issuer", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const expectedContractAddress = false;

        const actualValue = await sdk.isWrapped("CONTRACT");

        expect(actualValue).toBeFalsy();
        expect(actualValue).toEqual(expectedContractAddress);
    });

    it("should return an invalid balance contract address for an valid code and an invalid issuer", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const expectedAsset = null;

        const actualAsset = await sdk.getAsset(TEST_TOKEN_CONTRACT);

        expect(actualAsset).toBeNull();
        expect(actualAsset).toEqual(expectedAsset);
    });

    it("should return an invalid balance contract address for an valid code and an invalid issuer", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const expectedAsset = new Asset("USDS", "GBHAOSNA7PJOGKWPAQ2VYAY4Y2VMA5LKOPQVCFRXJNJG5YXV4ELEX2GZ");
        const actualAsset = await sdk.getAsset(TEST_WRAP_TOKEN_CONTRACT);

        expect(actualAsset).toEqual(expectedAsset);
    });

    it("should return an invalid balance contract address for an valid code and an invalid issuer", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const expectedAsset = null;

        const actualAsset = await sdk.getAsset("");
        
        expect(actualAsset).toBeNull();
        expect(actualAsset).toEqual(expectedAsset);
    });

    it("should return an invalid balance contract address for an valid code and an invalid issuer", async () => {
        const sdk = new TokenSDK(DEFAULT_NETWORK, TEST_PUBLIC_KEY);
        const expectedAsset = null;

        const actualAsset = await sdk.getAsset("CONTRACT");
        
        expect(actualAsset).toBeNull();
        expect(actualAsset).toEqual(expectedAsset);
    });
});