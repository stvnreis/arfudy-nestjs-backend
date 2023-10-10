import { EditProductUseCase } from '@domain/menu/application/use-cases/edit-product.use-case';
import { Controller, Param, Body, Patch } from '@nestjs/common';
import { ProductNutritionValidationPipe } from '../pipes/product-nutrition-validation.pipe';
import { EditProductRequestDto } from '../dtos/edit-product.request.dto';
import { HttpResponse } from '@core/responses/http.response';
import { MongoIdValidationPipe } from '../pipes/mongo-id-validation.pipe';

@Controller('products')
export class EditProductController {
  constructor(private readonly updateProductUseCase: EditProductUseCase) {}

  @Patch(':id')
  async handle(
    @Param('id', MongoIdValidationPipe) id: string,
    @Body(new ProductNutritionValidationPipe()) data: EditProductRequestDto,
  ): Promise<HttpResponse> {
    await this.updateProductUseCase.execute({
      id,
      ...data,
    });

    return { message: 'Produto salvo com sucesso!' };
  }
}
