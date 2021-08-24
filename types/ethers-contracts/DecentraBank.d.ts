/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface DecentraBankInterface extends ethers.utils.Interface {
  functions: {
    "DC()": FunctionFragment;
    "DD()": FunctionFragment;
    "DS()": FunctionFragment;
    "MAX_WEIGHT()": FunctionFragment;
    "addNewCollateralType(address)": FunctionFragment;
    "calculatePoolBal()": FunctionFragment;
    "calculatePurchase(uint256)": FunctionFragment;
    "calculatePurchaseReturn(uint256,uint256,uint32,uint256)": FunctionFragment;
    "calculateSale(uint256)": FunctionFragment;
    "calculateSaleReturn(uint256,uint256,uint32,uint256)": FunctionFragment;
    "collateralCount()": FunctionFragment;
    "collateralTypes(uint256)": FunctionFragment;
    "connectorWeight()": FunctionFragment;
    "divisor()": FunctionFragment;
    "fractionalReserveValue()": FunctionFragment;
    "fundWithdrawl(address,uint256,uint256)": FunctionFragment;
    "lockedBalance()": FunctionFragment;
    "owner()": FunctionFragment;
    "percent()": FunctionFragment;
    "purchaseStock(uint256,uint256)": FunctionFragment;
    "refundRatio()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sellStock(uint256)": FunctionFragment;
    "setUp()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "DC", values?: undefined): string;
  encodeFunctionData(functionFragment: "DD", values?: undefined): string;
  encodeFunctionData(functionFragment: "DS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MAX_WEIGHT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addNewCollateralType",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "calculatePoolBal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculatePurchase",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculatePurchaseReturn",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateSale",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateSaleReturn",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "collateralTypes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "connectorWeight",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "divisor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fractionalReserveValue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fundWithdrawl",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lockedBalance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "percent", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "purchaseStock",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "refundRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sellStock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "DC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MAX_WEIGHT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addNewCollateralType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculatePoolBal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculatePurchase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculatePurchaseReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateSaleReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralTypes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "connectorWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "divisor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fractionalReserveValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundWithdrawl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockedBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "percent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "purchaseStock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "refundRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sellStock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "FundWithdrawl(uint256,address)": EventFragment;
    "NewCollateral(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "StockPurchased(uint256,uint256,address)": EventFragment;
    "StockSold(uint256,uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FundWithdrawl"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewCollateral"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StockPurchased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StockSold"): EventFragment;
}

export class DecentraBank extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: DecentraBankInterface;

  functions: {
    DC(overrides?: CallOverrides): Promise<[string]>;

    DD(overrides?: CallOverrides): Promise<[string]>;

    DS(overrides?: CallOverrides): Promise<[string]>;

    MAX_WEIGHT(overrides?: CallOverrides): Promise<[number]>;

    addNewCollateralType(
      _collateral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculatePoolBal(overrides?: CallOverrides): Promise<[BigNumber]>;

    calculatePurchase(
      _dollarAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculatePurchaseReturn(
      _supply: BigNumberish,
      _connectorBalance: BigNumberish,
      _connectorWeight: BigNumberish,
      _depositAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateSale(
      _stockAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateSaleReturn(
      _supply: BigNumberish,
      _connectorBalance: BigNumberish,
      _connectorWeight: BigNumberish,
      _sellAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    collateralCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    collateralTypes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    connectorWeight(overrides?: CallOverrides): Promise<[number]>;

    divisor(overrides?: CallOverrides): Promise<[BigNumber]>;

    fractionalReserveValue(overrides?: CallOverrides): Promise<[BigNumber]>;

    fundWithdrawl(
      _to: string,
      _type: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lockedBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    percent(overrides?: CallOverrides): Promise<[BigNumber]>;

    purchaseStock(
      _amount: BigNumberish,
      _tokenType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    refundRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sellStock(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUp(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[string]>;
  };

  DC(overrides?: CallOverrides): Promise<string>;

  DD(overrides?: CallOverrides): Promise<string>;

  DS(overrides?: CallOverrides): Promise<string>;

  MAX_WEIGHT(overrides?: CallOverrides): Promise<number>;

  addNewCollateralType(
    _collateral: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculatePoolBal(overrides?: CallOverrides): Promise<BigNumber>;

  calculatePurchase(
    _dollarAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculatePurchaseReturn(
    _supply: BigNumberish,
    _connectorBalance: BigNumberish,
    _connectorWeight: BigNumberish,
    _depositAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateSale(
    _stockAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateSaleReturn(
    _supply: BigNumberish,
    _connectorBalance: BigNumberish,
    _connectorWeight: BigNumberish,
    _sellAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  collateralCount(overrides?: CallOverrides): Promise<BigNumber>;

  collateralTypes(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  connectorWeight(overrides?: CallOverrides): Promise<number>;

  divisor(overrides?: CallOverrides): Promise<BigNumber>;

  fractionalReserveValue(overrides?: CallOverrides): Promise<BigNumber>;

  fundWithdrawl(
    _to: string,
    _type: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lockedBalance(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  percent(overrides?: CallOverrides): Promise<BigNumber>;

  purchaseStock(
    _amount: BigNumberish,
    _tokenType: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  refundRatio(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sellStock(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUp(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    DC(overrides?: CallOverrides): Promise<string>;

    DD(overrides?: CallOverrides): Promise<string>;

    DS(overrides?: CallOverrides): Promise<string>;

    MAX_WEIGHT(overrides?: CallOverrides): Promise<number>;

    addNewCollateralType(
      _collateral: string,
      overrides?: CallOverrides
    ): Promise<void>;

    calculatePoolBal(overrides?: CallOverrides): Promise<BigNumber>;

    calculatePurchase(
      _dollarAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculatePurchaseReturn(
      _supply: BigNumberish,
      _connectorBalance: BigNumberish,
      _connectorWeight: BigNumberish,
      _depositAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSale(
      _stockAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSaleReturn(
      _supply: BigNumberish,
      _connectorBalance: BigNumberish,
      _connectorWeight: BigNumberish,
      _sellAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralCount(overrides?: CallOverrides): Promise<BigNumber>;

    collateralTypes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    connectorWeight(overrides?: CallOverrides): Promise<number>;

    divisor(overrides?: CallOverrides): Promise<BigNumber>;

    fractionalReserveValue(overrides?: CallOverrides): Promise<BigNumber>;

    fundWithdrawl(
      _to: string,
      _type: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lockedBalance(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    percent(overrides?: CallOverrides): Promise<BigNumber>;

    purchaseStock(
      _amount: BigNumberish,
      _tokenType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    refundRatio(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sellStock(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setUp(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    FundWithdrawl(
      dollarAmount?: null,
      tokenType?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { dollarAmount: BigNumber; tokenType: string }
    >;

    NewCollateral(
      collateral?: null
    ): TypedEventFilter<[string], { collateral: string }>;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    StockPurchased(
      dollarAmount?: null,
      stockAmount?: null,
      buyer?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string],
      { dollarAmount: BigNumber; stockAmount: BigNumber; buyer: string }
    >;

    StockSold(
      dollarAmount?: null,
      stockAmount?: null,
      reserveAmountAdded?: null,
      seller?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, string],
      {
        dollarAmount: BigNumber;
        stockAmount: BigNumber;
        reserveAmountAdded: BigNumber;
        seller: string;
      }
    >;
  };

  estimateGas: {
    DC(overrides?: CallOverrides): Promise<BigNumber>;

    DD(overrides?: CallOverrides): Promise<BigNumber>;

    DS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    addNewCollateralType(
      _collateral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculatePoolBal(overrides?: CallOverrides): Promise<BigNumber>;

    calculatePurchase(
      _dollarAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculatePurchaseReturn(
      _supply: BigNumberish,
      _connectorBalance: BigNumberish,
      _connectorWeight: BigNumberish,
      _depositAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSale(
      _stockAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSaleReturn(
      _supply: BigNumberish,
      _connectorBalance: BigNumberish,
      _connectorWeight: BigNumberish,
      _sellAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralCount(overrides?: CallOverrides): Promise<BigNumber>;

    collateralTypes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    connectorWeight(overrides?: CallOverrides): Promise<BigNumber>;

    divisor(overrides?: CallOverrides): Promise<BigNumber>;

    fractionalReserveValue(overrides?: CallOverrides): Promise<BigNumber>;

    fundWithdrawl(
      _to: string,
      _type: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lockedBalance(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    percent(overrides?: CallOverrides): Promise<BigNumber>;

    purchaseStock(
      _amount: BigNumberish,
      _tokenType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    refundRatio(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sellStock(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUp(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_WEIGHT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addNewCollateralType(
      _collateral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculatePoolBal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculatePurchase(
      _dollarAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculatePurchaseReturn(
      _supply: BigNumberish,
      _connectorBalance: BigNumberish,
      _connectorWeight: BigNumberish,
      _depositAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateSale(
      _stockAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateSaleReturn(
      _supply: BigNumberish,
      _connectorBalance: BigNumberish,
      _connectorWeight: BigNumberish,
      _sellAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    collateralTypes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    connectorWeight(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    divisor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fractionalReserveValue(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fundWithdrawl(
      _to: string,
      _type: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lockedBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    percent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    purchaseStock(
      _amount: BigNumberish,
      _tokenType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    refundRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sellStock(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUp(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}