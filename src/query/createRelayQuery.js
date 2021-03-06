/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createRelayQuery
 * @typechecks
 * @flow
 */

'use strict';

var RelayMetaRoute = require('RelayMetaRoute');
var RelayQuery = require('RelayQuery');

var invariant = require('invariant');

function createRelayQuery(
  node: Object,
  variables: {[key: string]: mixed}
): RelayQuery.Root {
  invariant(
    typeof variables === 'object' &&
    variables != null &&
    !Array.isArray(variables),
    'Relay.Query: Expected `variables` to be an object.'
  );
  return RelayQuery.Root.create(
    node,
    RelayMetaRoute.get('$createRelayQuery'),
    variables
  );
}

module.exports = createRelayQuery;
