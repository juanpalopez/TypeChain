/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription,
} from ".";

interface DataTypesViewInterface extends Interface {
  functions: {
    view_address: TypedFunctionDescription<{ encode([]: []): string }>;

    view_bool: TypedFunctionDescription<{ encode([]: []): string }>;

    view_bytes: TypedFunctionDescription<{ encode([]: []): string }>;

    view_bytes1: TypedFunctionDescription<{ encode([]: []): string }>;

    view_enum: TypedFunctionDescription<{ encode([]: []): string }>;

    view_int256: TypedFunctionDescription<{ encode([]: []): string }>;

    view_int8: TypedFunctionDescription<{ encode([]: []): string }>;

    view_named: TypedFunctionDescription<{ encode([]: []): string }>;

    view_stat_array: TypedFunctionDescription<{ encode([]: []): string }>;

    view_string: TypedFunctionDescription<{ encode([]: []): string }>;

    view_struct: TypedFunctionDescription<{ encode([]: []): string }>;

    view_tuple: TypedFunctionDescription<{ encode([]: []): string }>;

    view_uint256: TypedFunctionDescription<{ encode([]: []): string }>;

    view_uint8: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {};
}

export class DataTypesView extends Contract {
  connect(signerOrProvider: Signer | Provider | string): DataTypesView;
  attach(addressOrName: string): DataTypesView;
  deployed(): Promise<DataTypesView>;

  on(event: EventFilter | string, listener: Listener): DataTypesView;
  once(event: EventFilter | string, listener: Listener): DataTypesView;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): DataTypesView;
  removeAllListeners(eventName: EventFilter | string): DataTypesView;
  removeListener(eventName: any, listener: Listener): DataTypesView;

  interface: DataTypesViewInterface;

  functions: {
    view_address(overrides?: TransactionOverrides): Promise<string>;

    "view_address()"(overrides?: TransactionOverrides): Promise<string>;

    view_bool(overrides?: TransactionOverrides): Promise<boolean>;

    "view_bool()"(overrides?: TransactionOverrides): Promise<boolean>;

    view_bytes(overrides?: TransactionOverrides): Promise<string>;

    "view_bytes()"(overrides?: TransactionOverrides): Promise<string>;

    view_bytes1(overrides?: TransactionOverrides): Promise<string>;

    "view_bytes1()"(overrides?: TransactionOverrides): Promise<string>;

    view_enum(overrides?: TransactionOverrides): Promise<number>;

    "view_enum()"(overrides?: TransactionOverrides): Promise<number>;

    view_int256(overrides?: TransactionOverrides): Promise<BigNumber>;

    "view_int256()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    view_int8(overrides?: TransactionOverrides): Promise<number>;

    "view_int8()"(overrides?: TransactionOverrides): Promise<number>;

    view_named(
      overrides?: TransactionOverrides
    ): Promise<{
      uint256_1: BigNumber;
      uint256_2: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "view_named()"(
      overrides?: TransactionOverrides
    ): Promise<{
      uint256_1: BigNumber;
      uint256_2: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    view_stat_array(overrides?: TransactionOverrides): Promise<number[]>;

    "view_stat_array()"(overrides?: TransactionOverrides): Promise<number[]>;

    view_string(overrides?: TransactionOverrides): Promise<string>;

    "view_string()"(overrides?: TransactionOverrides): Promise<string>;

    view_struct(
      overrides?: TransactionOverrides
    ): Promise<{
      uint256_0: BigNumber;
      uint256_1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "view_struct()"(
      overrides?: TransactionOverrides
    ): Promise<{
      uint256_0: BigNumber;
      uint256_1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    view_tuple(
      overrides?: TransactionOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "view_tuple()"(
      overrides?: TransactionOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    view_uint256(overrides?: TransactionOverrides): Promise<BigNumber>;

    "view_uint256()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    view_uint8(overrides?: TransactionOverrides): Promise<number>;

    "view_uint8()"(overrides?: TransactionOverrides): Promise<number>;
  };

  view_address(overrides?: TransactionOverrides): Promise<string>;

  "view_address()"(overrides?: TransactionOverrides): Promise<string>;

  view_bool(overrides?: TransactionOverrides): Promise<boolean>;

  "view_bool()"(overrides?: TransactionOverrides): Promise<boolean>;

  view_bytes(overrides?: TransactionOverrides): Promise<string>;

  "view_bytes()"(overrides?: TransactionOverrides): Promise<string>;

  view_bytes1(overrides?: TransactionOverrides): Promise<string>;

  "view_bytes1()"(overrides?: TransactionOverrides): Promise<string>;

  view_enum(overrides?: TransactionOverrides): Promise<number>;

  "view_enum()"(overrides?: TransactionOverrides): Promise<number>;

  view_int256(overrides?: TransactionOverrides): Promise<BigNumber>;

  "view_int256()"(overrides?: TransactionOverrides): Promise<BigNumber>;

  view_int8(overrides?: TransactionOverrides): Promise<number>;

  "view_int8()"(overrides?: TransactionOverrides): Promise<number>;

  view_named(
    overrides?: TransactionOverrides
  ): Promise<{
    uint256_1: BigNumber;
    uint256_2: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "view_named()"(
    overrides?: TransactionOverrides
  ): Promise<{
    uint256_1: BigNumber;
    uint256_2: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  view_stat_array(overrides?: TransactionOverrides): Promise<number[]>;

  "view_stat_array()"(overrides?: TransactionOverrides): Promise<number[]>;

  view_string(overrides?: TransactionOverrides): Promise<string>;

  "view_string()"(overrides?: TransactionOverrides): Promise<string>;

  view_struct(
    overrides?: TransactionOverrides
  ): Promise<{
    uint256_0: BigNumber;
    uint256_1: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "view_struct()"(
    overrides?: TransactionOverrides
  ): Promise<{
    uint256_0: BigNumber;
    uint256_1: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  view_tuple(
    overrides?: TransactionOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  "view_tuple()"(
    overrides?: TransactionOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  view_uint256(overrides?: TransactionOverrides): Promise<BigNumber>;

  "view_uint256()"(overrides?: TransactionOverrides): Promise<BigNumber>;

  view_uint8(overrides?: TransactionOverrides): Promise<number>;

  "view_uint8()"(overrides?: TransactionOverrides): Promise<number>;

  filters: {};

  estimate: {
    view_address(overrides?: TransactionOverrides): Promise<BigNumber>;

    "view_address()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    view_bool(overrides?: TransactionOverrides): Promise<BigNumber>;

    "view_bool()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    view_bytes(overrides?: TransactionOverrides): Promise<BigNumber>;

    "view_bytes()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    view_bytes1(overrides?: TransactionOverrides): Promise<BigNumber>;

    "view_bytes1()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    view_enum(overrides?: TransactionOverrides): Promise<BigNumber>;

    "view_enum()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    view_int256(overrides?: TransactionOverrides): Promise<BigNumber>;

    "view_int256()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    view_int8(overrides?: TransactionOverrides): Promise<BigNumber>;

    "view_int8()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    view_named(overrides?: TransactionOverrides): Promise<BigNumber>;

    "view_named()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    view_stat_array(overrides?: TransactionOverrides): Promise<BigNumber>;

    "view_stat_array()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    view_string(overrides?: TransactionOverrides): Promise<BigNumber>;

    "view_string()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    view_struct(overrides?: TransactionOverrides): Promise<BigNumber>;

    "view_struct()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    view_tuple(overrides?: TransactionOverrides): Promise<BigNumber>;

    "view_tuple()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    view_uint256(overrides?: TransactionOverrides): Promise<BigNumber>;

    "view_uint256()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    view_uint8(overrides?: TransactionOverrides): Promise<BigNumber>;

    "view_uint8()"(overrides?: TransactionOverrides): Promise<BigNumber>;
  };
}
