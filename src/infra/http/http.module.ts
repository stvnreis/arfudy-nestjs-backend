import { Module } from '@nestjs/common';
import { FindAllProductsController } from './controllers/find-all-products.controller';
import { FindAllProductsUseCase } from '@domain/menu/application/use-cases/find-all-products.use-case';
import { CreateProductUseCase } from '@domain/menu/application/use-cases/create-product.use-case';
import { CreateProductsController } from './controllers/create-product.controller';
import { DeleteProductUseCase } from '@domain/menu/application/use-cases/delete-product.use-case';
import { DeleteProductsController } from './controllers/delete-product.controller';
import { FindProductByIdUseCase } from '@domain/menu/application/use-cases/find-product-by-id.use-case';
import { FindProductsByIdController } from './controllers/find-product-by-id.controller';
import { EditProductController } from './controllers/edit-product.controller';
import { EditProductUseCase } from '@domain/menu/application/use-cases/edit-product.use-case';
import { CreateTableUseCase } from '@domain/restaurant/application/use-cases/create-table.use-case';
import { EditTableUseCase } from '@domain/restaurant/application/use-cases/edit-table.use-case';
import { DeleteTableUseCase } from '@domain/restaurant/application/use-cases/delete-table.use-case';
import { CreateTableController } from './controllers/create-table.controller';
import { EditTableController } from './controllers/edit-table.controller';
import { DeleteTableController } from './controllers/delete-table.controller';
import { FindAllTablesController } from './controllers/find-all-tables.controller';
import { FindTableByIdController } from './controllers/find-table-by-id.controller';
import { FindAllTablesUseCase } from '@domain/restaurant/application/use-cases/find-all-tables.use-case';
import { FindTableByIdUseCase } from '@domain/restaurant/application/use-cases/find-table-by-id.use-case';

@Module({
  imports: [],
  controllers: [
    FindAllProductsController,
    CreateProductsController,
    DeleteProductsController,
    FindProductsByIdController,
    EditProductController,
    CreateTableController,
    EditTableController,
    DeleteTableController,
    FindAllTablesController,
    FindTableByIdController,
  ],
  providers: [
    FindAllProductsUseCase,
    CreateProductUseCase,
    DeleteProductUseCase,
    FindProductByIdUseCase,
    EditProductUseCase,
    CreateTableUseCase,
    EditTableUseCase,
    DeleteTableUseCase,
    FindAllTablesUseCase,
    FindTableByIdUseCase,
  ],
})
export class HttpModule {}
