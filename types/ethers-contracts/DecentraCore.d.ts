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

interface DecentraCoreInterface extends ethers.utils.Interface {
  functions: {
    "burners(address)": FunctionFragment;
    "dScore()": FunctionFragment;
    "dScoreMod(address)": FunctionFragment;
    "dd()": FunctionFragment;
    "ds()": FunctionFragment;
    "freezeFrame(address)": FunctionFragment;
    "freezeMember(address)": FunctionFragment;
    "frozenAccounts(address)": FunctionFragment;
    "getProposal(uint256)": FunctionFragment;
    "minters(address)": FunctionFragment;
    "newProposal(address,string,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "proposalID()": FunctionFragment;
    "proposalTime()": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
    "proxyBurnDD(address,uint256)": FunctionFragment;
    "proxyBurnDS(address,uint256)": FunctionFragment;
    "proxyMintDD(address,uint256)": FunctionFragment;
    "proxyMintDS(address,uint256)": FunctionFragment;
    "quorum()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setApprovedContract(address,uint256)": FunctionFragment;
    "setQuorum(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferxDAI(address,uint256)": FunctionFragment;
    "vote(uint256,bool)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "burners", values: [string]): string;
  encodeFunctionData(functionFragment: "dScore", values?: undefined): string;
  encodeFunctionData(functionFragment: "dScoreMod", values: [string]): string;
  encodeFunctionData(functionFragment: "dd", values?: undefined): string;
  encodeFunctionData(functionFragment: "ds", values?: undefined): string;
  encodeFunctionData(functionFragment: "freezeFrame", values: [string]): string;
  encodeFunctionData(
    functionFragment: "freezeMember",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "frozenAccounts",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "minters", values: [string]): string;
  encodeFunctionData(
    functionFragment: "newProposal",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposalID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proxyBurnDD",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proxyBurnDS",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proxyMintDD",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proxyMintDS",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "quorum", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovedContract",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setQuorum",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferxDAI",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "burners", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dScore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dScoreMod", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "freezeFrame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "freezeMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "frozenAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minters", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "newProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proposalID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxyBurnDD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxyBurnDS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxyMintDD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxyMintDS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovedContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setQuorum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferxDAI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;

  events: {
    "FunctionCallDelegated(address,bytes)": EventFragment;
    "NewProposal(uint256,uint256,address,bytes)": EventFragment;
    "NewVote(uint256,address,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ProposalApproved(uint256,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FunctionCallDelegated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewProposal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewVote"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalApproved"): EventFragment;
}

export class DecentraCore extends BaseContract {
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

  interface: DecentraCoreInterface;

  functions: {
    burners(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    dScore(overrides?: CallOverrides): Promise<[string]>;

    dScoreMod(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    dd(overrides?: CallOverrides): Promise<[string]>;

    ds(overrides?: CallOverrides): Promise<[string]>;

    freezeFrame(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    freezeMember(
      _member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    frozenAccounts(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    getProposal(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string,
        string
      ] & {
        maker: string;
        target: string;
        voteWeights: BigNumber;
        voteID: BigNumber;
        timeCreated: BigNumber;
        executed: boolean;
        proposalHash: string;
        call_data: string;
      }
    >;

    minters(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    newProposal(
      _target: string,
      _proposalHash: string,
      _calldata: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proposalID(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposalTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        string,
        string
      ] & {
        maker: string;
        target: string;
        timeCreated: BigNumber;
        voteWeights: BigNumber;
        voteID: BigNumber;
        executed: boolean;
        proposalPassed: boolean;
        proposalHash: string;
        call_data: string;
      }
    >;

    proxyBurnDD(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    proxyBurnDS(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    proxyMintDD(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    proxyMintDS(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    quorum(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovedContract(
      _contract: string,
      _privledge: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setQuorum(
      _quorum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferxDAI(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vote(
      _ProposalID: BigNumberish,
      supportsProposal: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  burners(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  dScore(overrides?: CallOverrides): Promise<string>;

  dScoreMod(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  dd(overrides?: CallOverrides): Promise<string>;

  ds(overrides?: CallOverrides): Promise<string>;

  freezeFrame(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  freezeMember(
    _member: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  frozenAccounts(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  getProposal(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      string,
      string
    ] & {
      maker: string;
      target: string;
      voteWeights: BigNumber;
      voteID: BigNumber;
      timeCreated: BigNumber;
      executed: boolean;
      proposalHash: string;
      call_data: string;
    }
  >;

  minters(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  newProposal(
    _target: string,
    _proposalHash: string,
    _calldata: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  proposalID(overrides?: CallOverrides): Promise<BigNumber>;

  proposalTime(overrides?: CallOverrides): Promise<BigNumber>;

  proposals(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      boolean,
      string,
      string
    ] & {
      maker: string;
      target: string;
      timeCreated: BigNumber;
      voteWeights: BigNumber;
      voteID: BigNumber;
      executed: boolean;
      proposalPassed: boolean;
      proposalHash: string;
      call_data: string;
    }
  >;

  proxyBurnDD(
    _from: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  proxyBurnDS(
    _from: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  proxyMintDD(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  proxyMintDS(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  quorum(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovedContract(
    _contract: string,
    _privledge: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setQuorum(
    _quorum: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferxDAI(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vote(
    _ProposalID: BigNumberish,
    supportsProposal: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    burners(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    dScore(overrides?: CallOverrides): Promise<string>;

    dScoreMod(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    dd(overrides?: CallOverrides): Promise<string>;

    ds(overrides?: CallOverrides): Promise<string>;

    freezeFrame(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    freezeMember(_member: string, overrides?: CallOverrides): Promise<void>;

    frozenAccounts(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    getProposal(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string,
        string
      ] & {
        maker: string;
        target: string;
        voteWeights: BigNumber;
        voteID: BigNumber;
        timeCreated: BigNumber;
        executed: boolean;
        proposalHash: string;
        call_data: string;
      }
    >;

    minters(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    newProposal(
      _target: string,
      _proposalHash: string,
      _calldata: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    proposalID(overrides?: CallOverrides): Promise<BigNumber>;

    proposalTime(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        string,
        string
      ] & {
        maker: string;
        target: string;
        timeCreated: BigNumber;
        voteWeights: BigNumber;
        voteID: BigNumber;
        executed: boolean;
        proposalPassed: boolean;
        proposalHash: string;
        call_data: string;
      }
    >;

    proxyBurnDD(
      _from: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    proxyBurnDS(
      _from: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    proxyMintDD(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    proxyMintDS(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    quorum(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setApprovedContract(
      _contract: string,
      _privledge: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setQuorum(_quorum: BigNumberish, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferxDAI(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    vote(
      _ProposalID: BigNumberish,
      supportsProposal: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    FunctionCallDelegated(
      target?: null,
      call_data?: null
    ): TypedEventFilter<
      [string, string],
      { target: string; call_data: string }
    >;

    NewProposal(
      proposalId?: null,
      proposalAmount?: null,
      target?: null,
      call_data?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, string],
      {
        proposalId: BigNumber;
        proposalAmount: BigNumber;
        target: string;
        call_data: string;
      }
    >;

    NewVote(
      proposalId?: null,
      voter?: null,
      vote?: null
    ): TypedEventFilter<
      [BigNumber, string, boolean],
      { proposalId: BigNumber; voter: string; vote: boolean }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    ProposalApproved(
      proposalId?: null,
      success?: null
    ): TypedEventFilter<
      [BigNumber, boolean],
      { proposalId: BigNumber; success: boolean }
    >;
  };

  estimateGas: {
    burners(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    dScore(overrides?: CallOverrides): Promise<BigNumber>;

    dScoreMod(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    dd(overrides?: CallOverrides): Promise<BigNumber>;

    ds(overrides?: CallOverrides): Promise<BigNumber>;

    freezeFrame(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    freezeMember(
      _member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    frozenAccounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getProposal(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minters(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    newProposal(
      _target: string,
      _proposalHash: string,
      _calldata: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proposalID(overrides?: CallOverrides): Promise<BigNumber>;

    proposalTime(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proxyBurnDD(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    proxyBurnDS(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    proxyMintDD(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    proxyMintDS(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    quorum(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovedContract(
      _contract: string,
      _privledge: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setQuorum(
      _quorum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferxDAI(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vote(
      _ProposalID: BigNumberish,
      supportsProposal: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    burners(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dScore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dScoreMod(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dd(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ds(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    freezeFrame(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    freezeMember(
      _member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    frozenAccounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposal(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    newProposal(
      _target: string,
      _proposalHash: string,
      _calldata: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proxyBurnDD(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    proxyBurnDS(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    proxyMintDD(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    proxyMintDS(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    quorum(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovedContract(
      _contract: string,
      _privledge: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setQuorum(
      _quorum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferxDAI(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vote(
      _ProposalID: BigNumberish,
      supportsProposal: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}