/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { FC } from 'react';

declare const EditFilterList: FC<{
  filterId?: string;
  canCreateFilter: boolean;
  canDeleteFilter: boolean;
}>;
