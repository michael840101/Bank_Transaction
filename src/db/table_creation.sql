--CREATE  transaction  table
CREATE  TABLE IF NOT EXISTS transactions (
reference  character varying(62),
account  int,
amount  decimal varying(128)
);


--CREATE  balances  table
CREATE  TABLE IF NOT EXISTS balances (
account  int,
balance  decimal varying(128)
);
